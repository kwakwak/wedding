'use strict';

angular.module('weddingApp')
  .factory('resource',['$resource',function($resource){
        return $resource('/api/invite');
    }]);