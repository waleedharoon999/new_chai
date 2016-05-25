/**
 * Created by aalli on 5/24/16.
 */
app.factory('authenticationService', [function () {

    return {
        authenticate: function (email, pass) {
            if (email == "aallimahmood5@gmail.com" && pass == "1234")
                return true;
            else
                return false;
        }
    };
}]);