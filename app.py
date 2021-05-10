"""
Serve the DSOMM database via a GraphQL endpoint.
"""
import logging
import os
import re
from shlex import quote as escape
from typing import List

import strawberry
from pony.orm import db_session

import dsomm
import orm
from orm import db

DB_NAME = "dsomm"

db.bind(
    provider="mysql",
    host=os.environ.get("MYSQL_HOST", ""),
    user="root",
    passwd=os.environ.get("MYSQL_ROOT_PASSWORD", "root"),
    db=DB_NAME,
)
db.generate_mapping()

log = logging.getLogger(__name__)


@strawberry.type
class User:
    name: str
    age: int


@strawberry.type
class Reference:
    name: str
    description: str


@strawberry.type
class ReferenceItem:
    name: str


@strawberry.type
class BareActivity:
    dimension: str
    subdimension: str
    name: str


@strawberry.type
class Implementation:
    name: str
    description: str = None
    topics: List[str] = None
    tags: List[str] = None
    url: str = None

    @strawberry.field
    def activities(self) -> List[BareActivity]:
        with db_session:
            assert self.name

            i = orm.Implementation[self.name]
            assert i
            print(i.to_dict())
            acts = i.activities()
            acts = list(acts)
            return [
                BareActivity(
                    name=a.name, subdimension=a.subdimension, dimension=a.dimension
                )
                for a in acts
            ]


@strawberry.type
class Samm2:
    index: int
    id: str
    function: str
    practice: str
    maturity: str
    stream: str


def get_references():
    return ["abc"]


def escape_entries_as_mysql_list(entries):
    if not entries:
        return []

    items = ["""'%s'""" % escape(i).strip("'") for i in entries]
    return "(" + ",".join(i for i in items) + ")"


@strawberry.type
class Activity:
    dimension: str
    subdimension: str
    name: str
    level: str
    data: str
    _references: strawberry.Private[List[str]]
    _implementation: strawberry.Private[List[str]]
    done: int

    @strawberry.field
    def references(self) -> List[ReferenceItem]:
        return [ReferenceItem(name=n) for n in self._references]

    @strawberry.field
    def implementation(self) -> List[Implementation]:
        entries = self._implementation
        for i in entries:
            if not re.match(r"[a-zA-Z0-9-\[\]\(\):]", i):
                log.warning("Bad value: %r", i)
                entries.remove(i)
                continue
            if len(i) > 100:
                log.warning("Entry too long: %r", i)
                entries.remove(i)
                continue

        if not entries:
            return []

        items = ["""'%s'""" % escape(i).strip("'") for i in entries]
        items = "(" + ",".join(i for i in items) + ")"

        with db_session:
            return [
                Implementation(**k.to_dict())
                for k in orm.Implementation.select_by_sql(
                    f"SELECT * FROM implementation " f"WHERE name  in {items}"  # noqa
                )
            ]

    @strawberry.field
    def samm2(self, stream: str = None) -> List[Samm2]:
        with db_session:
            sql = f"""
              SELECT DISTINCT *
              FROM samm
              WHERE
                  CONCAT("samm2:", id) in {escape_entries_as_mysql_list(self._references)}
            """
            q = {"stream": stream}
            if stream:
                sql += " AND s.stream LIKE $stream"
            return [Samm2(*k) for k in db.execute(sql, globals=q)]

    @strawberry.field
    def samm2_controls(self) -> List[Samm2]:
        with db_session:
            sql = dsomm.queries["samm2-unused-controls"]
            return [Samm2(*k) for k in db.execute(sql)]


@strawberry.type
class Subdimension:
    name: str
    activities: List[Activity]

    @strawberry.field
    def count(self) -> int:
        return len(self.activities)


@strawberry.type
class Dimension:
    name: str
    subdimensions: List[Subdimension]

    @strawberry.field
    def count(self) -> int:
        return len(self.subdimensions)


@strawberry.type
class Query:
    """All endpoints."""

    @strawberry.field
    def references(self) -> List[Reference]:
        with db_session:
            return [Reference(*k) for k in db.execute("SELECT * FROM reference;")]

    @strawberry.field
    def implementations(
        self, name: str = None, tag: str = None, has_topics: str = None
    ) -> List[Implementation]:
        with db_session:
            name = name or "%"
            tag = tag or "%"
            q = orm.Implementation.select_by_sql(
                "SELECT * FROM implementation WHERE name LIKE $name"
                " AND tags LIKE $tag"
            )
            entries = [k.to_dict() for k in q]
            return [Implementation(**k) for k in entries]

    @strawberry.field
    def activities(self, name: str = None) -> List[Activity]:
        with db_session:
            entries = [
                k.to_dict() for k in orm.Activity.select(lambda a: f"{name}" in a.name)
            ]
            for k in entries:
                if "implementation" in k:
                    k["_implementation"] = k.pop("implementation", [])
                if "references" in k:
                    k["_references"] = k.pop("references", [])

            return [Activity(**k) for k in entries]

    @strawberry.field
    def samm2(self, maturity: int = None) -> List[Samm2]:
        with db_session:
            if maturity is not None:
                return [
                    Samm2(*k)
                    for k in db.execute(
                        "SELECT * FROM samm " " WHERE maturity = $maturity;"
                    )
                ]
            return [Samm2(*k) for k in db.execute("SELECT * FROM samm;")]

    @strawberry.field
    def dimension(self) -> List[Dimension]:
        """
        XXX this is ugly but it was quicker to implement ;)
        FIXME - escaping code & co
        :return:
        """
        with db_session:
            return [
                Dimension(
                    name=d[0],
                    subdimensions=[
                        Subdimension(
                            name=s[0],
                            activities=[
                                Activity(*a)
                                for a in db.execute(
                                    f"""
                        SELECT * FROM activity WHERE dimension="{d[0]}" and subdimension="{s[0]}";
                        """
                                )
                            ],
                        )
                        for s in db.execute(
                            f"""
                        SELECT DISTINCT subdimension FROM activity WHERE
                        dimension='{d[0]}'
                        """
                        )
                    ],
                )
                for d in db.execute(
                    f"""
                SELECT distinct dimension from activity
                """
                )
            ]


def test_overview_count(db):
    with db_session:
        overview = db.execute(dsomm.queries["activities-per-dimension"])
        assert ("BuildAndDeployment", "Build", 4) in overview


schema = strawberry.Schema(query=Query)
