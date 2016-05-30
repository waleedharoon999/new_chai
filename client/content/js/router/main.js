/**
 * Created by aalli on 5/20/16.
 */
var app = angular.module('main', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/index");
    //noinspection JSAnnotator
    $stateProvider.state('index', {
        url:"/index",
        templateUrl: "client/content/template/main.html",
        controller:'myCtrl'
        

    }).state('dashboard', {
        url:'/dashboard',
        views:{
            '':{
                templateUrl: "client/content/template/dashboard.html"
            },              

            /*'contentInner@dashboard':{url:"/logfile",
                templateUrl:"client/content/template/logfile.html",
            },*/

            'sideBar@dashboard':{
                templateUrl:"client/content/template/sidebar.html"
            },
            'header@dashboard':{
                templateUrl:"client/content/template/header.html"
            },
            'footer@dashboard':{
                templateUrl:"client/content/template/footer.html"
            },
            'content@dashboard':{
                templateUrl:"client/content/template/content.html"
            }

        }
        }).state('dashboard.compliance',{
            url:'/compliance',
            templateUrl:"client/content/template/missingDeployments.html",

    }).state('dashboard.logfile',{
        url:'/logfile',
        templateUrl:"client/content/template/logfile.html",

    }).state('dashboard.missingDeployments',{
        url:'/assurance',
        templateUrl:"client/content/template/assurance.html",

    }).state('dashboard.integrations',{
        url:'/integrations',
        templateUrl:'client/content/template/integration.html'
    }).state('dashboard.integrations.deployments',{
        url:'/deployments',
        templateUrl:'client/content/template/deployments.html'
    });

});