> This repository contains a bunch of shell and javascript utilities for my personal website database deployment. They're all based on docker engine and MongoDB. They are mostly used to start a mongod daemon with authentication, and do some initilization work for the first time deployment. I didn't make them to be part of a CICD pipeline because most of the database setup will not really be repetitive and CICD is mostly for the front-end and back-end service development.

## MongoDB Daemon (Running in Docker Container)
- `./mongod/create <root_username> <root_password>`
  - start mongod daemon in a **new container** with container name defined in `./mongod/config`
  - create root user for the database with `<root_username>` and `<root_password>`
  - the mongod daemon is started with `--auth` turned on by default in this way
  - the username and password will be stored in `.crendentials/root` in current folder, **make sure not to expose the file to anyone else**
- `./mongod/start`: start mongod daemon tied to an existing stopped container
- `./mongod/stop`: stop mongod daemon tied to an existing running container (also stop the docker container)

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