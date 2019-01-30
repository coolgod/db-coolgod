// set up connection
print('connecting to mongod');
conn = new Mongo('mongo:27017');

// get "admin" database for verification
print('connecting to admin');
db = conn.getDB('admin');

// auth for root access
print('authenticating root user');
db.auth(root_username, root_password);

// create database
print('creating database ' + dbname);
db = conn.getDB(dbname);

// create user
if (db.getUser(username) != null) {
    print('user already created!');
} else {
    print('creating user for ' + db.getName());
    db.createUser(
        {
            user: username,
            pwd: password,
            roles: ['readWrite'],
            passwordDigestor: 'server'
        });
}

// done
print('done')
quit()