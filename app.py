"""
Serve the DSOMM database via a GraphQL endpoint.
"""
import logging
import os
import re
from shlex import quote as escape
from typing import List
from urllib.parse import urlparse

import requests
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
    description: str
    topics: List[str] = None

    @strawberry.field
    def atopics(self) -> List[str]:
        if self.name.startswith("https://github.com/"):
            repo = urlparse(self.name).path.strip("/")
            try:
                ret = requests.get(
                    f"https://api.github.com/repos/{repo}/topics",
                    headers={"Accept": "application/vnd.github.mercy-preview+json"},
                )
                return ret.json()["names"]
            except Exception:
                return ["error", repo]
        return ["todo"]

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


@strawberry.type
class Activity:
    dimension: str
    subdimension: str
    name: str
    level: str
    data: str
    references: List[ReferenceItem]
    _implementation: strawberry.Private[List[str]]
    done: int

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
    def samm2(self, stream: str) -> List[Samm2]:
        with db_session:
            sql = dsomm.queries["get-activity-samm2"]
            q = {"references": self.references, "stream": stream}
            if stream:
                sql += " AND s.stream LIKE $stream"
            return [Samm2(*k) for k in db.execute(sql, globals=q)]


@strawberry.type
class Query:
    """All endpoints."""

    @strawberry.field
    def references(self) -> List[Reference]:
        with db_session:
            return [Reference(*k) for k in db.execute("SELECT * FROM reference;")]

    @strawberry.field
    def implementations(self, name: str = None) -> List[Implementation]:
        with db_session:
            q = orm.Implementation.select
            if name:
                q = lambda: orm.Implementation.select_by_sql(
                    "SELECT * FROM implementation WHERE name like $name"
                )
            entries = [k.to_dict() for k in q()]
            for k in entries:
                k["_implementations"] = k.pop("implementations")

            return [Implementation(**k) for k in entries]

    @strawberry.field
    def activities(self) -> List[Activity]:
        with db_session:
            entries = [k.to_dict() for k in orm.Activity.select()]
            for k in entries:
                if "implementation" in k:
                    k["_implementation"] = k.pop("implementation", [])

            return [Activity(**k) for k in entries]

    @strawberry.field
    def samm2(self) -> List[Samm2]:
        with db_session:
            return [Samm2(*k) for k in db.execute("SELECT * FROM samm;")]


def test_overview_count(db):
    with db_session:
        overview = db.execute(dsomm.queries["activities-per-dimension"])
        assert ("BuildAndDeployment", "Build", 4) in overview


schema = strawberry.Schema(query=Query)
