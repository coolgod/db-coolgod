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
- `<root_username>` and `<root_password>` will be stored in `.crendentials/root`, **make sure to keep them to yourself!**

### Stop mongod
```
./mongod/stop
```

### Restart mongod
```
./mongod/start
```

## Database
- `./mongo/init <dbname> <username> <password>`
  - create database with the name of `<dbname>`
  - create database user `<username>` and password `<password>` for service access, read/write permissions assigned
  - all crendentials will be stored in under `./credentials` folder

## Manual Steps
- ssh into EC2 instance to install docker engine
- first time db deployment
  - start MongoDB daemon container and create root user and password: `./mongod/create` 
  - run script to init users, database: `./mongo/init`

## TODO
- [ ] `mongo/init`失败时，不要生成credential
- [ ] 移除deprecated的docker的`--link`用法