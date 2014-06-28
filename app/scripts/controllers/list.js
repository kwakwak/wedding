'use strict';

angular.module('weddingApp')
  .controller('ListCtrl', ['$scope','resource',function ($scope, resource) {
        resource.query(function(invites) {
            $scope.invites = invites;
        });

        $scope.remove = function (invite){

            invite.$remove({id:invite._id},function(res){
                for (var i in $scope.invites) {
                    if ($scope.invites[i]._id === res._id) {
                        $scope.invites.splice(i, 1);
                    }
                }
            });
        }
  }]);
