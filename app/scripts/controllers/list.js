'use strict';

angular.module('weddingApp')
  .controller('ListCtrl', ['$scope','resource',function ($scope, resource) {
        resource.query(function(invites) {
            $scope.invites = invites;
            // count total group size
            $scope.group_size_sum = 0;
            for (var i in $scope.invites) {
                if ($scope.invites[i].number){
                    $scope.group_size_sum+= $scope.invites[i].number;
                }
            }

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
