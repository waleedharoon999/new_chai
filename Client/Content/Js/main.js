var myapp = angular.module('main', ["ui.router"])
myapp.config(function ($stateProvider,$urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/index");
    $stateProvider.state('index',
        {
            url: "/index",
            views: {
                "login": {
                    templateUrl: "client/content/template/login.html"
                }
            }
        });
});
