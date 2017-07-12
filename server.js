//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Route includes
// var index = require('./public/views/index');
var twilio = require('./modules/twilioR');

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/twilioR', twilio);

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
