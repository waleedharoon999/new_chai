/**
 * Created by Waleed Haroon on 24/05/2016.
 */
/*var connection = require('./connection.js');*/
myApp.factory('loginService', ['$http', function ($http) {
    return {
        authenticate: function (user, pass) {
            return $http.post('/auth', {username: user, password: pass})


        }
        /*if (username == "waleed@gmail.com" && password == "123456") {
         return true;
         }
         return false*/
    }


}]);