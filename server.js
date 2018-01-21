// Import 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var encrypt = require('./lib/encrypt');
var shortid = require('shortid');
var fs = require('fs');


var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// get links
/*fs.readFile('data.json', function(err, data){
	
	if (err){
        console.log(err);
    } else {
		obj = JSON.parse(data); //now it an object
		obj.table.push({id: 2, square:3}); //add some data
		json = JSON.stringify(obj); //convert it back to json
		console.log(json);
		
	}
	
});
	
fs.writeFile('data.json', function(err, data){
	var obj = JSON.parse(data);
	console.log(obj);
});*/

app.post('/generate', function(req, res){
	
	var url = req.body.url;
	var value = shortid.generate();
	return res.json("hello");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})