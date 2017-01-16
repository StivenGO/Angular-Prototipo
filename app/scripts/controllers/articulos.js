'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts=[
      {
        title:"Alimentos buenos",
        content:"Lorem ipsum dolor sit"
      },
      {
        title:"Alimentos menos buenos",
        content:"Lorem ipsum dolor sit"
      },
      {
        title:"Limita tu cantida de hidratos de carbono",
        content:"Lorem ipsum dolor sit"
      },
    ];
    
  });
