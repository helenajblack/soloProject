//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var watson = require('./modules/watsonR');
// var twilio = require('./modules/twilioR');

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use('/twilioR', twilio);
app.use('/watsonR', watson);

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

app.post('/voice', function(req, res) {
  var twiml = new twilio.TwimlResponse();
  twiml.say('Hello from Twilio');

  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });
  res.end(twiml.toString());
});
