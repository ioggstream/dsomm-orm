# DSOMM Model Playground

**NOTE** This is a temporary repository used for sharing design
considerations that will removed in the future.
Please look at https://dsomm.timo-pagel.de/
and to https://github.com/wurstbrot/DevSecOps-MaturityModel for
the consolidated version.

This python repository helps in validating the dsomm model files,
and includes a dockerized environments with:

- a mysql server
- a graphql app

# Environment setup

At first you need to download some external files
including samm2 and dsomm vocabularies (ioggstream branch).

        setup.sh

Start running some tests: they will create the database on the
dockerized host too. Some test fails because they are under development.

        docker-compose up test

To play with your dev stuff you could use the `gql` service
and enter the container.

        docker-compose up -d gql
        docker exec -ti dsomm-model_gql_1 /bin/bash


To play with the sample webapp

        docker-compose up -d web

and then http://localhost:13000/

## Export schema

To export the schema, run

        strawberry export-schema app > schema.gql

# Contributing

## pre-commit

Pre-commit checks your files before committing. It can lint, format or do
other checks on them.

Once you install it via

        pip3 install pre-commit --user

You can run it directly via

        pre-commit run --all-files


Or install it as a pre-commit hook

        pre-commit install
