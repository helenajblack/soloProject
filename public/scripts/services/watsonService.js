app.service('watsonService', function() {
  var sv = this;

  sv.emergency = document.createElement('audio');
  sv.emergency.autoplay = false;
  sv.emergency.src = "soundfiles/emergency.wav";
});
