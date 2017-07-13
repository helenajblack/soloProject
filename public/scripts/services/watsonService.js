app.service('watsonService', function() {
  var sv = this;

  sv.effect1 = document.createElement('audio');
  sv.effect1.autoplay = false;
  sv.effect1.src = "soundfiles/effect1.ogg";

  sv.studd = document.createElement('audio');
  sv.studd.autoplay = false;
  sv.studd.src = "soundfiles/studd.ogg";

});
