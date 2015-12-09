'use strict';

angular.module('myApp.CarouselDemoCtrl',['ngAnimate', 'ui.bootstrap'])

.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 2000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [
    {
      image: '/Content/sacSkyline.jpg',
      text: 'A Full Service Law Firm'
    },
    {
      image: '/Content/courtroom.jpg',
      text: 'Insert Caption'
    },
    {
      image: '/Content/immigration pic.jpg',
      text: 'Insert Caption'
    },
    {
      image: '/Content/orchards7.jpg',
      text: 'Insert Caption'
    }
  ];
});