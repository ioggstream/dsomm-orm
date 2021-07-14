"""
Create DSOMM database with pony.orm.
"""
import http
import json
from pathlib import Path
from re import findall
from urllib.parse import urlparse

import yaml
from jsonpath_ng import parse as jsonpath_parse
from jsonpointer import resolve_pointer
from pony.orm import (
    Database,
    Json,
    LongUnicode,
    Optional,
    PrimaryKey,
    Required,
    db_session,
    set_sql_debug,
)

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
    description = Optional(LongUnicode)
    topics = Optional(Json)
    tags = Optional(Json)
    url = Optional(str)

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


def yl(fpath):
    return yaml.safe_load(Path(fpath).read_text())


def resolve_refs(data, context_path="."):
    context_path = Path(context_path)
    for item in jsonpath_parse("$..'$ref'").find(data):
        ref = item.value
        *fpath, jpath = ref.split("#", 2)
        # Resolve jpath from external file or
        #   internal data.
        jdata = yl(context_path / fpath[0]) if fpath and fpath[0] else data
        rdata = resolve_pointer(jdata, jpath)

        # The root instance match.
        if item.context.value == data:
            return rdata

        # Supports both dict and lists.
        k = (
            item.context.path.fields[0]
            if hasattr(item.context.path, "fields")
            else item.context.path.index
        )
        ctx = item.context.context.value
        ctx[k] = rdata
    return data


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
            print(
                "name",
                name,
                [
                    x
                    for x in implementation
                    if implementation and (not isinstance(x, dict) or "name" not in x)
                ],
            )
            implementation_keys = [
                x["$ref"].split("/")[-1]
                for x in implementation
                if isinstance(x, dict) and "$ref" in x
            ]
            t = Activity(
                dimension=dimension,
                subdimension=subdimension,
                name=name,
                implementation=implementation_keys,
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
                if not (i_name := i.get("$ref", None)):
                    continue

                i = resolve_refs(i.copy(), context_path="downloads/")
                i_name = i_name.split("/")[-1]
                i.pop("name")

                topics = []
                if False and (ghrepo := findall("https://[a-z/0-9A-Z.]+", i_name)):
                    repo = urlparse(ghrepo[0]).path.strip("/")
                    topics = get_github_topics(repo)
                Implementation.get(name=i_name) or Implementation(
                    name=i_name, topics=topics, **i
                )


def get_github_topics(repo):
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
        return topics
    except Exception as e:
        print(repo, e)
        return []


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
