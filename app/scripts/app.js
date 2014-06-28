'use strict';

angular.module('weddingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'partials/list',
        controller: 'ListCtrl'
      })
      .when('/', {
        templateUrl: 'partials/form',
        controller: 'FormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });