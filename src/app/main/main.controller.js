'use strict';

angular.module('volt')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.volts = [];
    getVolts();

    $scope.hand = function(volt) {
        if(volt.inUseBy) {
            handIn(volt);
        } else {
            var name = prompt('Name please!')
            handOut(volt, name);
        }
    }

    function handOut(volt, personName) {
        //change status of volt with voltId
        volt.inUseBy = personName;
        volt.lastUsed = Date();

        //track handout event
        analytics.track('handout', {
          id: volt.id,
          date: volt.lastUsed,
          name: volt.inUseBy
        });
    };

    function handIn(volt) {

        //track handin event
        analytics.track('handin', {
          id: volt.id,
          date: Date(),
          name: volt.inUseBy
        });

        //change status of volt with voltId in db
        volt.inUseBy = '';
    }

    function getVolts() {
        var volts;
        // var volts = $window.localStorage.volts;
        if(!volts) {
            volts = createVolts();
            // $window.localStorage.volts = volts;
        }
        $scope.volts = volts;
    }
    function createVolts() {
        var amount = 10;
        var volts = [];
        for (var i = 0; i < amount; i++) {
            volts.push({
                id: i+1
            })
        };
        return volts;
    }
  });
