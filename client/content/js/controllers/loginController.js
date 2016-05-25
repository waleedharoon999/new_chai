myApp.controller('loginCtrtl', ['$scope', 'loginService','$state','$location', function ($scope, loginService,$state) {
    $scope.submitForm = function () {
        var isAuthenticated = loginService.authenticate($scope.userName,$scope.password);
        console.log(isAuthenticated);
        if(isAuthenticated == true){
           $state.go('dashboard');
        }
    }
     
}]);
