This repository contains a bunch of shell and javascript utilities for my personal website database deployment. They're all based on docker engine and MongoDB. They are mostly used to start a mongod daemon with authentication, and do some initilization work for the first time deployment. I didn't make them to be part of a CICD pipeline because most of the database setup will not really be repetitive and CICD is mostly for the front-end and back-end service development.

## Prerequisites
- docker environment (the `docker` CLI command should work)
- configure docker container name (for MongoDB daemon) in `./mongd/config`

## MongoDB Daemon

### Start mongod in a new docker container
```
./mongod/create <root_username> <root_password>
```

- This will start mongod daemon in a **new** container.
- It creates root user for MongoDB databases with `<root_username>` and `<root_password>`
- The [mongod](https://docs.mongodb.com/manual/reference/program/mongod/) is started with `--auth`.
- The database root on disk is mounted to `.db`
- `<root_username>` and `<root_password>` will be stored in `.crendentials/root`, **keep them at a safe place!**

### Stop mongod
```
./mongod/stop
```

### Restart mongod
```
./mongod/start
```

## Database

### Initialize database
```
./mongo/init <dbname> <username> <password>
```
- This creates a MongoDB database with the name of `<dbname>`
- Your service can connect to the database with user name `<username>` and password `<password>`, read and write permissions are allowed.
- All crendentials will be stored in `./credentials/<dbname>`, **keep them at a safe place!**

## TODO
- [ ] `mongo/init`失败时，不要生成credential
- [ ] 移除deprecated的docker的`--link`用法