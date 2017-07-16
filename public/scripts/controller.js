var app = angular.module('apiController', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/emergency', {
      templateUrl: 'views/routes/prompts.html',
      controller: 'apiController as ac'
    })
    .when('/tutorial', {
      templateUrl: 'views/routes/tutorial.html',
      controller: 'apiController as ac'
    });
});

app.controller('apiController', apiControllerFunction);

function apiControllerFunction(twilioService, $http, watsonService) {
  console.log('In controller');
  var vm = this;

  vm.makeCall = function() {
    var object = {};
    console.log('makeCall');

    twilioService.makeCall().then(function(response) {
      console.log(response);
    });
  };

  vm.playVoice = function() {
    console.log('in playVoice');
    var data = {
      text: ' '
    };
    $http.post('/watsonR', data).then(function(res) {
      console.log(res);
      // watsonService.effect1.play();

    });
  };

}

// google maps
function getLocation() {
  console.log('in getLocation');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  console.log('in long lat', lon, lat);
  latlon = new google.maps.LatLng(lat, lon);
  mapholder = document.getElementById("mapholder");
  mapholder.style.height = '250 px';
  mapholder.style.width = '500 px';

  var myOptions = {
    center: latlon,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    }
  };

  var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
  var marker = new google.maps.Marker({
    position: latlon,
    map: map,
    title: "You are here!"
  });
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}
