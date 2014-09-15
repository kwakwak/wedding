'use strict';

angular.module('weddingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl'
      });
  });
