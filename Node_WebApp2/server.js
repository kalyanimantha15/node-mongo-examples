var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.get('/',function(req,res){
	var dirName = 'D:/MyLearnings/NodeJS/First-Node-webapp';
	app.use(express.static(__dirname + '/public'));
});

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
res.render('pages/index');
});
app.listen(8080);
console.log('Wow! A tiny Node app! started');