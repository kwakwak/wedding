'use strict';

angular.module('weddingApp')
  .controller('ListCtrl', function ($scope,resource,$location,Modal) {

        $scope.count = function(invites){
            var count = 0;
            for (var i in invites) {
                if (invites[i].number){
                    count+= invites[i].number;
                }
            }
            return count;
        };

        resource.query(function(invites) {
            $scope.invites = invites;
            // count total group size
            $scope.group_size_sum=$scope.count($scope.invites);
        });

        $scope.remove = function (invite){
            var delConfirm= Modal.confirm.delete(function(){
                var searchObject = $location.search();
                if (angular.isObject(searchObject)) {
                    invite.$remove({id:invite._id,password:searchObject.password},function(res){
                        for (var i in $scope.invites) {
                            if ($scope.invites[i]._id === res._id) {
                                $scope.invites.splice(i, 1);
                            }
                        }
                        $scope.group_size_sum=$scope.count($scope.invites);
                    });
                }
            });
            delConfirm(invite.name);
        }
  });
