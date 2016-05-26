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
                    '': {
                        templateUrl: "client/content/template/dashBoard.html"
                    },
                    'sideBar@dashboard': {
                        templateUrl: "client/content/template/sideBar.html"
                    },
                    'header@dashboard': {
                        templateUrl: "client/content/template/header.html"
                    },
                    'footer@dashboard': {
                        templateUrl: "client/content/template/footer.html"
                    },
                    'content@dashboard': {
                        templateUrl: "client/content/template/content.html"
                    }
                }
            }).state('dashboard.analytics',
        {
            url: '/analytics',
            templateUrl: "client/content/template/analytics.html"
        }).state('dashboard.compliance',
        {
            url: '/compliance',
            templateUrl: "client/content/template/compliance.html"
        }).state('dashboard.assurance',
        {
            url: '/assurance',
            templateUrl: "client/content/template/assurance.html"
        }).state('dashboard.integrations',
        {
            url: '/integrations',
                    templateUrl: "client/content/template/integrations.html"
        }).state('dashboard.integrations.deployments',{
            url:'/deployments',
            templateUrl:"client/content/template/deployments.html"
    }).state('dashboard.integrations.logstash',{
        url:'/logstash',
        templateUrl:"client/content/template/logstash.html"
    }).state('dashboard.integrations.users',{
        url:'/users',
        templateUrl:"client/content/template/users.html"
    });

});
