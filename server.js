//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//twilio requires
var accountSid = 'ACe2174850132f262cd41010d72b00d102';
var authToken = "d0b02e9c3c3d60058364e5a66da532ba";
var client = require('twilio')(accountSid, authToken);

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));


//globals
var port = process.env.PORT || 1212;

//spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});

//home base route
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

//twilio
// var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// var authToken = "your_auth_token";
// var client = require('twilio')(accountSid, authToken);

client.calls.create({
  url: "http://demo.twilio.com/docs/voice.xml",
  to: "+16513543251",
  from: "+17632519413 "
}, function(err, call) {
  process.stdout.write(call.sid);
  console.log('twilio error function');
});
