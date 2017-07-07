var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/emergency', {
      templateUrl: 'views/routes/prompts.html',
      controller: 'apiController'
    })
    .when('/tutorial', {
      templateUrl: 'views/routes/tutorial.html',
      controller: 'apiController'
    });
});

myApp.controller('apiController', function(googleMapsAPI) {
  console.log('API controller loaded');

  var vm = this;

  //google maps function
  vm.getProfile = function() {
    googleMapsAPI.reverseGeocodingData().then(function(response) {
      console.log('in googleMaps API');
      vm.location = response;
      console.log('my data:', vm.location);
    });
  };
}); //end google api service call
