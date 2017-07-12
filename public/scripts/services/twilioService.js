app.service('twilioService', ['$http', function($http) {
  var vm = this;

  vm.makeCall = function(objectToSend) {
    return $http.post('/twilioR', objectToSend).then(function success(res) {
      return res;
    });
  };

}]);
