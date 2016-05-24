myApp.controller('loginCtrtl', ['$scope', 'loginService', function ($scope, loginService) {
    $scope.submitForm = function () {
        var isAuthenticated = loginService.authenticate($scope.userName,$scope.password);
        console.log(isAuthenticated);
    }
     
}]);
