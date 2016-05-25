/**
 * Created by aalli on 5/23/16.
 */

app.controller('myCtrl',['$scope','authenticationService','$state',function ($scope,authenticationService,$state) {
    $scope.submit=function () {
        var isAuthenticated=authenticationService.authenticate($scope.email1,$scope.pass);

        if(isAuthenticated==true)
        {
            $state.go('dashboard');
        }
    }

}]);
