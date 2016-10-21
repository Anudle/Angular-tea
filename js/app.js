var app = angular.module('TeaApp' ['ngRoute']);


app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl:'../partials/home.html',
    controller: 'TeaController'
  })
})
