/**
 * Created by aalli on 5/20/16.
 */
var app = angular.module('main', ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/index");
    $stateProvider.state('index', {
        url:"/index",
        views: {
            "loginMain": {

                templateUrl: "client/content/template/main.html"
            }

        }
    });

});