var myApp = angular.module('main', ["ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/index");
    $stateProvider.state('index',
        {
            url: "/index",
            views: {
                "loginMain": {

                    templateUrl: "client/content/template/login.html",
                    controller:'loginCtrtl'
                }

            }
        })
        /*.state('dashboard',
            {
                url: "/dashBoard",
                templateUrl: "client/content/template/dashBoard.html"

            }
        )*/
});
