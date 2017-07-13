var express = require('express');
var router = express.Router();
var accountSid = 'AC4b560eb2ba55e9fdb4a60af127a63798';
var authToken = "1c319106b2130091f609f0cd7c38f7df";
var client = require('twilio')(accountSid, authToken);
var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

router.post('/', function(req, res) {
  console.log("req body: ", req.body);
  client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+16513543251",
    from: "+17633249466"
  }, function(err, call) {
    if (call) {
      console.log('call ', call);
      process.stdout.write(call.sid);
      res.send('success!');
    } else {
      console.log(err);
      res.send(err);
    }

  });
});

module.exports = router;
