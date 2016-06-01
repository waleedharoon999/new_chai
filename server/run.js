var fs = require('fs');
var path = require('path');
var parser = require('body-parser');
var express = require('express');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('testdb', 'root', '123456', {
    dialect: 'mysql'
});
var application = express();
application.use(parser());
application.use(express.static('../client/content'));
application.use(express.static('../'));
application.post('/auth', function (req, res) {
    sequelize
        .authenticate()
        .then(function (err) {
            console.log('Connection established.');
        }, function (err) {
            console.log('Unable to connect to the database:', err);
        });
    var user = sequelize.define('user', {
        username: Sequelize.STRING,
        password: Sequelize.STRING
    });
    user.find({where: {username: req.body.username}})
        .then(function (err, user) {
            if (!user) {
                console.log('invalid user');
                return res.send({success: 'true'});
            }
            else {
                return res.send({success: 'true'});
            }
        });
    res.send({success: 'success'});
});
application.listen(8000, function () {

});