'use strict';

angular.module('volt', ['ngTouch', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/handout/:voltId', {
        templateUrl: 'app/handout/form.html',
        controller: 'HandoutCtrl'
      })
      .when('/survey', {
        templateUrl: 'app/survey/survey.html'
      })
      .when('/takehome', {
        templateUrl: 'app/takehome/takehome.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function (Volts) {
    Volts.create(10);
  })
;
