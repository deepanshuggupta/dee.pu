// Import 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/generate', function(req, res){
	console.log(req.body.url);
	return res.json("hello");
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})