var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/html'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root : './public/html'});
});

app.get('/canary', function(req, res){
  res.sendFile('canary.html', {root : './public/html'});
});

app.get('/capeverde', function(req, res){
  res.sendFile('cape.html', {root : './public/html'});
});

app.get('/straitofmagellan', function(req, res){
  res.sendFile('strait.html', {root : './public/html'});
});

app.get('/guam', function(req, res){
  res.sendFile('guam.html', {root : './public/html'});
});

app.get('/philippines', function(req, res){
  res.sendFile('philippines.html', {root : './public/html'});
});

// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server running on port ' + port);
});
