'use strict';

angular.module('myApp.CarouselDemoCtrl',['ngAnimate', 'ui.bootstrap'])

.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 2000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [
    {
      image: '/Content/sacSkyline.jpg',
      text: 'Atwal & Company'
    },
    {
      image: '/Content/courtroom.jpg',
      text: 'A Full Service Law Firm'
    },
    {
      image: '/Content/immigration pic.jpg',
      text: 'Immigration'
    },
    {
      image: '/Content/orchards7.jpg',
      text: 'Agriculture'
    }
  ];

});