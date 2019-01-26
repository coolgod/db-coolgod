#!/usr/local/bin/mongo --quiet

/*
 * ./config/dev.js:
 * var username = 'coolgod';
 * var password = '123456';
 * var dbname = 'coolgod-dev';
 */
load('./config/dev.js');

// set up connection to mongod
conn = new Mongo('localhost:27017');

// create database coolgod
print('initializing database!');
db = conn.getDB(dbname);

// create user for database coolgod
if (db.getUser(username) != null) {
  print('user already created!');
} else {
  print('creating user!');
  db.createUser(
    {
      user: username,
      pwd: password,
      roles: ['readWrite']
    }
 );
}
