//requires
var watsonCredentials = require('./watsonCredentials.js');
var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

var text_to_speech = new TextToSpeechV1({
  username: watsonCredentials.username,
  password: watsonCredentials.password
});

var params = {
  voice: 'en-US_AllisonVoice'
};

text_to_speech.voice(params, function(error, voice) {
  if (error)
    console.log('Error:', error);
  else
    console.log(JSON.stringify(voice, null, 2));
});

router.post('/', function(req, res) {
  console.log(req.body.text);
  res.send('something');
});

module.exports = router;
