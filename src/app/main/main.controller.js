'use strict';

angular.module('volt')
  .controller('MainCtrl', function ($scope, Volts) {
    $scope.volts = [];
    $scope.volts = Volts.all();
  });
