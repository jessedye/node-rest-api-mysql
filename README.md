# NodeJS Example Restful API using MySQL

## This repo uses NodeJS combined with MySQL to allow calls to a restful API.
This repo is a good starting point for anyone trying this for the first time.

# Requirements
1. MySQL with username/password
2. node installed (duh)


# To get started
1. `npm install`
2. edit host, user, and password for mysql database
3. In your mysql server run db.sql to create table for API to interact with
4. run `node app.js`
5. open browser and go to localhost:8080/
6. to see users from your database go to localhost:8080/user/1
7. to see another user go to localhost:8080/user/2
8. to see all users go to localhost:8080/users/