import os

import pandas as pd
import pytest
from pony.orm import Database, db_session
from sqlalchemy import create_engine

from dsomm import queries
from orm import create_database
from orm import db as ormdb
from orm import overview
from util.samm_resolver import SammResolver

DB_NAME = "dsomm"
MYSQL_HOST = os.environ.get("MYSQL_HOST", "")


@pytest.fixture(scope="session")
def db():
    mycnf = dict(provider="mysql", host=MYSQL_HOST, user="root", passwd="root")
    tdb = Database()
    tdb.bind(**mycnf)
    with db_session:
        tdb.execute(f"CREATE DATABASE IF NOT EXISTS {DB_NAME};")
    tdb.disconnect()

    mycnf["database"] = DB_NAME
    ormdb.bind(**mycnf)
    return ormdb


@pytest.fixture(autouse=True, scope="session")
def setup(db):
    create_database()


@pytest.fixture(autouse=True, scope="session")
def populate_samm_table(setup):
    fpath = "downloads/Datafiles"
    samm = SammResolver(fpath)
    df = pd.DataFrame([samm.parse_activity(a) for a in samm.activities])
    df.to_csv("samm_activities.csv")

    engine = create_engine(f"mysql+mysqlconnector://root:root@{MYSQL_HOST}/{DB_NAME}")

    df.to_sql("samm", con=engine, if_exists="replace")


def test_pony_populate_activities(db):
    with db_session:
        tables = db.execute("SHOW TABLES;")
        assert ("activity",) in tables.fetchall()


def interpolate_json_query(sql):
    """
    pony.orm processes `$` as a format variable. This function
    interpolates it replacing with `$$`.
    See https://github.com/ponyorm/pony/issues/322#issuecomment-351307146
    :param sql:
    :return: an escaped string
    """
    return sql.replace("$", "$$")


def test_activity(db):
    from orm import Activity, Implementation

    with db_session:
        ret = Activity.select(lambda p: "Docker" in p.implementation)
        list(ret)
        i = Implementation["logstash"]
        aslist = i.activities()
        for x in aslist:
            print("goo", x.name)
        import pdb

        pdb.set_trace()
    raise NotImplementedError


def test_overview(db):
    ret = overview(db)
    assert (
        "Building and testing of artifacts in virtual environments"
        in ret["BuildAndDeployment-Build"][2]
    )


def test_overview_count(db):
    with db_session:
        overview = db.execute(queries["activities-per-dimension"])
        assert ("BuildAndDeployment", "Build", 4) in overview


def test_mapping_samm2(db):
    with db_session:
        db.execute(queries["overview"])
        raise NotImplementedError


def test_mapping_iso(db):
    with db_session:
        db.execute(queries["overview"])
        raise NotImplementedError


def test_references_1(db):
    with db_session:
        sql = queries["activity-references-unique"]
        sql = interpolate_json_query(sql)
        ret = db.execute(sql)
        assert (
            "iso27001-2017:14.2.9",
            "TestAndVerification",
            "Test-Intensity",
            "Regular tests",
            '["samm2:I-SB-3-A", "iso27001-2017:14.2.3", "iso27001-2017:14.2.8", "iso27001-2017:14.2.9"]',
        ) in ret


def test_samm2_dive_1(db):
    with db_session:
        sql = queries["activity-samm2"]
        sql = interpolate_json_query(sql)
        db.execute(sql)
        raise NotImplementedError


def test_samm2_dive_1_short(db):
    with db_session:
        sql = queries["mappings-activity-samm2"]
        sql = interpolate_json_query(sql)
        db.execute(sql)
        raise NotImplementedError


def test_samm2_dive_2_unused(db):
    with db_session:
        sql = queries["samm2-unused-entries"]
        sql = interpolate_json_query(sql)
        ret = db.execute(sql)
        assert (
            "V-AA-3-B",
            "Verification",
            "Architecture Assessment",
            "3",
            "Architecture Mitigation",
        ) in [x[1:] for x in ret]
