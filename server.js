// Import 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var encrypt = require('./lib/encrypt');

var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/generate', function(req, res){
	console.log(req.body);
	var url = req.body.url;
	encrypt(url);
	return res.json("hello");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})