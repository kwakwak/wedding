'use strict';

angular.module('weddingApp')
  .controller('ListCtrl', ['$scope','resource',function ($scope, resource) {
        resource.query(function(invites) {
            $scope.invites = invites;
    });
  }]);
