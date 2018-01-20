// Import 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var encrypt = require('./lib/encrypt');
var shortid = require('shortid');

var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
var data = {};

console.log(data);
app.post('/generate', function(req, res){
	var url = req.body.url;
	var value = shortid.generate();
	data.value = url;
	console.log(data.value);
	return res.json("hello");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})