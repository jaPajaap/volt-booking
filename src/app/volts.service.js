'use strict';

angular.module('volt')
  .service('Volts', function () {
    return {
      volts: {},
      names: [
        "Japie","Aimpie","Bert","Henk","Pop","Barbie","Ken","Loes","Lotje","Pul"
      ],
      all: function() {
        return this.volts;
      },
      create: function(amount) {
        // empty volts to be sure
        this.volts = {};

        // create volts to be sure
        for (var i = 0; i < amount; i++) {
            this.volts[i] = {
                id: i,
                name: this.names[i]
            };
        };
        return this.volts;
      },
      handout: function(id, user) {
        var volt = this.volts[id];
        volt.user = user;
        volt.handout = Date();

        //track handout event
        analytics.track('handout', {
          id: volt.id,
          handout: volt.handout,
          username: volt.user.name,
          email: volt.user.email
        });
        return volt;
      },
      handin: function(id) {
        var volt = this.volts[id];

        //track handin event
        analytics.track('handin', {
          id: volt.id,
          date: Date(),
          username: volt.user.name
        });

        //change status of volt with voltId in db
        delete volt.user;

        return volt;
      }
    };
  })
;
