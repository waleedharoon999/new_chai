var myApp = angular.module('main', ["ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/index");
    $stateProvider.state('index',
        {
            url: "/index",

            templateUrl: "client/content/template/login.html",
            controller: 'loginCtrtl'


        })
        .state('dashboard',
            {
                url: "/dashBoard",
                views: {
                    '': {templateUrl: "client/content/template/dashBoard.html"},
                    'sideBar@dashboard': {templateUrl: "client/content/template/sideBar.html"},
                    'footer@dashboard': {templateUrl: "client/content/template/footer.html"}
                }

            })
    /* .state('dashboard.sidebar', {
     url: '/sideBar',
     templateUrl: "client/content/template/sideBar.html"

     })
     */
});
