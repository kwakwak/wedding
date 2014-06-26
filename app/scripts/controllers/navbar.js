'use strict';

angular.module('weddingApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
        {
            'title': 'List',
            'link': '/list'
        },
        {
            'title': 'Confirm invitation',
            'link': '/'
        }
    ];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
