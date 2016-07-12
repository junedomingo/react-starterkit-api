var jsonServer = require('json-server');
var db = require('./database');
var express = require('express');
var colors = require('colors');
var cors = require('cors');
var app = jsonServer.create();

var port = 3006;
app.use(cors());

app.use(jsonServer.router(db));
app.use(jsonServer.defaults());
app.get('*', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});
app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('API is now running'.yellow);
	}
});