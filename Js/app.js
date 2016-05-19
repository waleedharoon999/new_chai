var app= angular.module('main',[]);
app.controller('myCtrl',function ($scope) {
    $scope.result=function () {
        if($scope.id=="")
            return 1;
    }
});
