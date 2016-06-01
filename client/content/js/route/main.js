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
        .state('dashBoard',
            {
                url: "/dashBoard",
                views: {
                    '': {
                        templateUrl: "client/content/template/dashBoard.html"
                    },
                    'sideBar@dashBoard': {
                        templateUrl: "client/content/template/sideBar.html"
                    },
                    'header@dashBoard': {
                        templateUrl: "client/content/template/header.html"
                    },
                    'footer@dashBoard': {
                        templateUrl: "client/content/template/footer.html"
                    },
                    'content@dashBoard': {
                        templateUrl: "client/content/template/content.html"
                    }
                }
            }).state('dashBoard.analytics',
        {
            url: '/analytics',
            templateUrl: "client/content/template/analytics.html"
        }).state('dashBoard.compliance',
        {
            url: '/compliance',
            templateUrl: "client/content/template/compliance.html"
        }).state('dashBoard.assurance',
        {
            url: '/assurance',
            templateUrl: "client/content/template/assurance.html"
        }).state('dashBoard.integrations',
        {
            url: '/integrations',
            templateUrl: "client/content/template/integrations.html"
        }).state('dashBoard.integrations.deployments', {
        url: '/deployments',
        templateUrl: "client/content/template/deployments.html"
    }).state('dashBoard.integrations.logs', {
        url: '/logs',
        templateUrl: "client/content/template/logs.html"
    }).state('dashBoard.integrations.users', {
        url: '/users',
        templateUrl: "client/content/template/users.html"
    });

});
