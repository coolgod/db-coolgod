# Deployment
## MongoDB Daemon
- `./mongod/start`: start mongod daemon
- `./mongod/start -- --auth`
  - **be sure to start the deamon with auth enabled in production**
- `./mongod/restart`: restart mongod daemon
  - this will kill any running daemon and remove log files
- `./mongod/stop`: stop any running mongod daemon

## Database
- `./scripts/init.js` (mongod w/o auth)
  - create database user with superuser roles
  - create database user for service access
  - create database
- `./scripts/annihilate.js` (mongod w/ auth)
  - **wipe out all existing database content including the user associated (using superuser account)**

## Manual Step (First Time Deployment)
- start MongoDB daemon w/o auth
- run script to init users, database, etc.
- stop MongoDB
- start MongoDB daemon w/ auth