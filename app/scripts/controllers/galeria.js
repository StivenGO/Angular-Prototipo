'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {
    var pictures=$scope.pictures=[];

    var baseUrl="http://lorempixel.com/300/180/";

    var titles=["Comida Sana","Salud y trabajo","Vida en la ciudad","Mantente activo","Cuida tu aspecto","Vida Nocturna"];
    
    var keywords=["food","business","city","sports","fashion","nightlife"];

    var dummyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad Excepteur sint occaecat cupidatat non proident";

    $scope.addPics=function(i){
      pictures.push({
        url:baseUrl+keywords[i],
        title:titles[i],
        summary:dummyText
      });
    }

    for(var i=0;i<=5;i++){
      $scope.addPics(i);
    }

    $scope.rate=0;
    $scope.max=10;
    $scope.isReadonly=true;
  });
