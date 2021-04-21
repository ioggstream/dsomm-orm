"""
Create DSOMM database with pony.orm.
"""
from pony.orm import Database, Json, Optional, PrimaryKey, Required, db_session

import dsomm

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
            implementation = [x.strip() for x in implementation]
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
                Implementation.get(name=i) or Implementation(name=i)


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
