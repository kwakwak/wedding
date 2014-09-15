'use strict';

angular.module('weddingApp')
  .controller('MainCtrl', function ($scope,resource) {
            $scope.status = {
                saving: false,
                success: false
            }

            $scope.create = function(invite){
                $scope.status.saving = true;
                var inviteRes = new resource;
                angular.copy(invite, inviteRes);
                inviteRes.$save(function(res){
                    $scope.status.success = true;
                    $scope.status.saving = false;
                    $scope.inviteForm ={};
                });
            }
  });
