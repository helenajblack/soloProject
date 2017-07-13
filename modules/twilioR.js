var express = require('express');
var router = express.Router();
var accountSid = 'ACe2174850132f262cd41010d72b00d102';
var authToken = "d0b02e9c3c3d60058364e5a66da532ba";
var client = require('twilio')(accountSid, authToken);
var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

router.post('/', function(req, res) {
  console.log("req body: ", req.body);
  client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+16513543251",
    from: "+15005550006"
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
