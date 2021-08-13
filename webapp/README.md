# DSOMM ORM Playground

This app is a minimal showcase for DSOMM ORM playground.

It shows in a searchable/toggable table the content of the DSOMM ORM database
creaded by https://github.com/ioggstream/dsomm-orm.

# Running

Set the graphql backend url in Demo.tsx

```
// in Demo.tsx
...

let URI = "http://172.29.0.3:8000/";


```

Then run via docker-compose

    docker-compose up web
