angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })

            .state('locations', {
                url: '/locations',
                templateUrl: '../views/locations.html'
            })

            .state('packages', {
                url: '/packages',
                templateUrl: '../view/packages.html'
            })

            .state('adventurers', {
                url: '/adventurers/',
                parent: '/',
                templateUrl: '../views/about-adventurers.html'
            })

            .state('contact', {
                url: '/contact',
                parent: '/',
                templateUrl: '../views/contact.html'
            })

            .state('booked', {
                url: '/booked/:id',
                templateUrl: '../views/booked.html'
            });

        $urlRouterProvider
            .otherwise('/');
    });
