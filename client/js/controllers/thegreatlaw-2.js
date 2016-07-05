angular.module('first', ['ngRoute', 'ngAnimate'])

.config(function($routeProvider, $locationProvider){
  $routeProvider

    .when('/first', {
      templateUrl: 'client/pages/first.html',
      controller: 'FirstCtrl'
    })

    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
})