'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    //Servicio para el carrousel de bootstrap
    var baseUrl='http://lorempixel.com/900/300/';
    $scope.setInterval=5000;

    $scope.slides=[
      {
        title:'Aprende a mantener en forma',
        image:baseUrl+'sports/',
        text:'!Parctiva algún deporte todos los días'
      },
      {
        title:'Buena alimentación',
        image:baseUrl+'food/',
        text:'!La importancia de las futras y verduras',
      },
      {
        title:'En contacto con la naturaleza',
        image:baseUrl+'nature/',
        text:'!Mantente en armonía con la naturaleza'
      }
    ];
    
    var baseUrl='http://lorempixel.com/200/200/';
    $scope.contenido=[
      {
        img:baseUrl+'people',
        title:'Sobre Nosotros',
        summary:'Somos una empresa comprometida con la vida.'
      },
      {
        img:baseUrl+'business',
        title:'Nuestros Servicios',
        summary:'Ofrecemos asesorias profesionales.'
      },
      {
        img:baseUrl+'transport',
        title:'Contáctenos',
        summary:'#333, Buena vida online, Plaza Central.'
      },
    ];
  });
