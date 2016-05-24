 myApp.controller('loginCtrtl',function ($scope ) {
     $scope.submitForm = function () {
         if ($scope.username=="waleed@gmail.com"&& $scope.password=="123456") {
             return console.log("submitted");
         }
     }
});
