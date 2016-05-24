/**
 * Created by Waleed Haroon on 24/05/2016.
 */
myApp.factory('loginService', [function() {
    return {
        authenticate: function (username,password) {
            if (username == "waleed@gmail.com" && password == "123456") {
                return true;
            }

        }
    };

}]);