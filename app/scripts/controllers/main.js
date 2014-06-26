'use strict';

angular.module('weddingApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.status = {
        saving: false,
        success: false
    }
    $http.get('/api/invites').success(function(invites) {
      $scope.invites = invites;
    });
    $scope.create = function(invite){
        $scope.status.saving = true;
        $http.post('/api/createInvite', invite).success(function(res) {
            console.log(res);
            if (res.success) {
                $scope.status.success = true;
                $scope.status.saving = false;
                $scope.inviteForm ={};

            }
        });
    }
  });
