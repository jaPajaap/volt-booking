'use strict';

angular.module('volt', ['ngTouch', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/survey', {
        templateUrl: 'app/survey/survey.html'
      })
      .when('/handout', {
        templateUrl: 'app/handout/form.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
