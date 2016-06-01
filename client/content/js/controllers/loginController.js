myApp.controller('loginCtrtl', ['$scope', 'loginService', '$state', '$location', function ($scope, loginService, $state) {
    $scope.submitForm = function () {
        loginService.authenticate($scope.username, $scope.password)
            .then(function () {
                    $state.go('dashBoard.analytics');
                }
            )
            .catch(function () {
                $state.go('index');
            })
            .finally(function () {
                $state.go('index');
            })

    }

}]);
