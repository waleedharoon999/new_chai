var myapp = angular.module('main', ["ui.router"])
myapp.config(function($stateProvider){
$stateProvider.state('index', {url:"", templateUrl:"Client/Content/template/login.html"});
});
