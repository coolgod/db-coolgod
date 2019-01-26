# Deployment
## MongoDB Daemon
- `./mongod/start`: start mongod daemon
- `./mongod/start -- --auth`
  - **be sure to start the deamon with auth enabled in production**
- `./mongod/restart`: restart mongod daemon
  - this will kill any running daemon and remove log files
- `./mongod/stop`: stop any running mongod daemon

## Database
- `./scripts/init.js`
  - create database user (first time running)
  - create database
- `./scripts/annihilate.js`
  - **wipe out all existing database content including the user associated**