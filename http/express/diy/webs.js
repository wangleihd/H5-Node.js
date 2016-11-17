var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hello world!");
});

app.get('/doc', function(req, res){
  res.send('doc page');
});

app.get('/admin', function(req, res){
  res.send('admin page');
});

app.listen(3000);
