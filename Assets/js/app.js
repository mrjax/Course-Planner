(function () {
    'use strict';

    // Declare global module which depends on filters, and services
    var app = angular.module('CourseApp', ['ngRoute', 'ngCookies']);

    app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

        $routeProvider.when('/home', {
            templateUrl: '/Assets/partials/home.html',
            controller: 'HomeController'
        });

        $routeProvider.otherwise({ redirectTo: '/home' });

    }]);

}());