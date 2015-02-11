'use strict';

angular.module('volt')
  .controller('HandoutCtrl', function ($scope, $routeParams, $location, Volts ) {
    var voltId = parseInt($routeParams.voltId,10);
    $scope.getVolt = function(user) {
      Volts.handout(voltId, user);
      $location.path('/');

    }
  })
;

