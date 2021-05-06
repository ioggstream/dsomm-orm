"""
Create DSOMM database with pony.orm.
"""
import http
import json
from re import findall
from urllib.parse import urlparse

from pony.orm import (Database, Json, Optional, PrimaryKey, Required,
                      db_session, set_sql_debug)

import dsomm

set_sql_debug(True)

db = Database()


class Activity(db.Entity):
    dimension = Required(str)
    subdimension = Required(str)
    name = Required(str)
    level = Optional(int)
    data = Optional(Json)
    references = Optional(Json)
    implementation = Optional(Json)
    done = Required(int, default=0)
    PrimaryKey(dimension, subdimension, name)


class Implementation(db.Entity):
    name = PrimaryKey(str)
    description = Optional(str)
    topics = Optional(Json)

    def activities(self):
        return Activity.select_by_sql(
            """SELECT * FROM activity AS a
                WHERE
                JSON_SEARCH(a.implementation, 'one',
                    $x
                ) IS NOT NULL;
            """,
            globals={"x": self.name},
        )


class Reference(db.Entity):
    name = PrimaryKey(str)
    description = Optional(str)


def create_database():
    for t in ("activity", "reference", "implementation"):
        db.drop_table(t, if_exists=True, with_all_data=True)

    db.generate_mapping(create_tables=True)
    with db_session:
        for a in dsomm.load_activities_as_table():
            dimension, subdimension, name, data = a
            references = data.pop("references", [])
            level = data.pop("level")
            implementation = data.pop("implementation", None) or []
            implementation = [x.strip() for x in implementation if isinstance(x, str)]
            t = Activity(
                dimension=dimension,
                subdimension=subdimension,
                name=name,
                implementation=implementation,
                level=level,
                references=references,
                data=data,
            )
            for i in references:
                if ":" not in i:
                    continue
                reference = i.split(":")[0]
                Reference.get(name=reference) or Reference(name=reference)
            for i in implementation:
                if not i:
                    continue
                i = str(i)
                if len(i) > 64:
                    i = i[:64]

                topics = []
                if ghrepo := findall("https://[a-z/0-9A-Z.]+", i):
                    repo = urlparse(ghrepo[0]).path.strip("/")
                    try:
                        conn = http.client.HTTPSConnection("api.github.com")
                        conn.request(
                            "GET",
                            f"/repos/{repo}/topics",
                            headers={
                                "User-Agent": "curl",
                                "Accept": "application/vnd.github.mercy-preview+json",
                            },
                        )

                        # get result
                        response = json.loads(conn.getresponse().read())
                        topics = response["names"]
                    except:
                        print(ghrepo, response)
                Implementation.get(name=i) or Implementation(name=i, topics=topics)


def overview(db):
    with db_session:
        q = db.execute(dsomm.queries["overview"])
        from collections import defaultdict

        ret = defaultdict(dict)
        for dimension, subdimension, level, activity in q:
            k = dimension + "-" + subdimension
            if level not in ret[k]:
                row_activities = ret[k][level] = []
            row_activities.append(activity)
    return ret
