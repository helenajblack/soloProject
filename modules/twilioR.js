var express = require('express');
var router = express.Router();
var accountSid = 'ACe2174850132f262cd41010d72b00d102';
var authToken = "d0b02e9c3c3d60058364e5a66da532ba";
var client = require('twilio')(accountSid, authToken);

router.post('/', function(req, res) {
  console.log("req body: ", req.body);
  client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+16513543251",
    from: "+17632519413 "
  }, function(err, call) {
    if (call) {
      process.stdout.write(call.sid);
    } else if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send('success!');
    }

  });
});

module.exports = router;
