app.service('twilioService', ['$http', function($http) {
  var vm = this;

  vm.makeCall = function() {
    objectToSend = {
      phone: "+16513543251"
    };
    console.log('ots', objectToSend);
    console.log('service obj', objectToSend);
    return $http.post('/twilioR', objectToSend).then(function success(res) {
      console.log('service ', res);
      return (res);
    }, function(err) {
      console.log(err);
    });
  };

}]);
