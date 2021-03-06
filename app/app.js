'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'myApp.CarouselDemoCtrl',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view5',
  'myApp.view7',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/Home'});
}]);
