"""
Serve the DSOMM database via a GraphQL endpoint.
"""
import os
from typing import List

import strawberry
from pony.orm import db_session

import dsomm
from orm import db

DB_NAME = "dsomm"

db.bind(
    provider="mysql",
    host=os.environ.get("MYSQL_HOST", ""),
    user="root",
    passwd=os.environ.get("MYSQL_ROOT_PASSWORD", "root"),
    db=DB_NAME,
)


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
class Implementation:
    name: str
    description: str


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
    implementation: List[Implementation]
    done: int

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
    @strawberry.field
    def references(self) -> List[Reference]:
        with db_session:
            return [Reference(*k) for k in db.execute("SELECT * FROM reference;")]

    @strawberry.field
    def implementations(self) -> List[Implementation]:
        with db_session:
            return [
                Implementation(*k) for k in db.execute("SELECT * FROM implementation;")
            ]

    @strawberry.field
    def activities(self) -> List[Activity]:
        with db_session:
            return [Activity(*k) for k in db.execute("SELECT * FROM activity;")]

    @strawberry.field
    def samm2(self) -> List[Samm2]:
        with db_session:
            return [Samm2(*k) for k in db.execute("SELECT * FROM samm;")]


def test_overview_count(db):
    with db_session:
        overview = db.execute(dsomm.queries["activities-per-dimension"])
        assert ("BuildAndDeployment", "Build", 4) in overview


schema = strawberry.Schema(query=Query)
