'use strict';

angular.module('volt')
  .controller('MainCtrl', function ($scope, Volts, $location) {
    $scope.volts = [];
    $scope.volts = Volts.all();
    $scope.hand = function(volt) {
      if(volt.user) {
        $location.path("/handin/" + volt.id);
      } else {
        $location.path("/handout/" + volt.id);
      }
    }
  });
