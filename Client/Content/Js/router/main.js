/**
 * Created by aalli on 5/20/16.
 */
var app = angular.module('main', ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
  //  $urlRouterProvider.otherwise("/login")
    $stateProvider.state('login', {
        url: "/login", views: {
            "loginMain": {
                templateUrl: "Client/Content/template/main.html"
            }
        }
    });
});