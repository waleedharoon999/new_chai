var Sequelize = require('sequelize');
var sequelize = new Sequelize('testdb', 'root','123456', {
    dialect: "mysql",
    port:3306
});

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });
var User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

sequelize
    .sync()
    .then(function(err) {
        console.log('It worked!');
    }, function (err) {
        console.log('An error occurred while creating the table:', err);
    });

User.create({
    username: 'waleed@gmail.com',
    password: '123456'
}).then(function(user) {
    // console.log(err);
});
exports.User = User;
/*** Created by Waleed Haroon on 31/05/2016.
 */
