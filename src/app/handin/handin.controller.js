'use strict';

angular.module('volt')
  .controller('HandinCtrl', function ($scope, $routeParams, $location, Volts ) {
    var voltId = parseInt($routeParams.voltId,10);
    Volts.handin(voltId);
  })
;

