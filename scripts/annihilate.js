#!/usr/local/bin/mongo --quiet

/*
 * ./config/dev.js:
 * var username = 'coolgod';
 * var password = '123456';
 * var dbname = 'coolgod-dev';
 */
load('./config/dev.js');

// set up connection to mongod database
conn = new Mongo('localhost:27017');
db = conn.getDB(dbname)

// dropping all users
print('dropping all users!');
db.dropAllUsers();

// dropping database
print('dropping database!');
db.dropDatabase();
