myApp.service('googleMapsAPI', function($http) {
  //Enter your token and username here:
  var oauthToken = 'AIzaSyC0R6Xns-4_z1Vex1owYbr67ICJv1rd0lM';

  //Call to Github API to fetch user's profile info
  this.reverseGeocodingData = function() {

    return $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + LAT & LONG + oauthToken,
      headers: {
        'Authorization': 'token ' + oauthToken
      }
    }).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };
});
