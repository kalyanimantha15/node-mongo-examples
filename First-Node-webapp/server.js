var express = require('express');
var app = express();

app.get('/',function(req,res){
	var dirName = 'D:/MyLearnings/NodeJS/First-Node-webapp';
	res.sendFile(dirName + '/index.html');
});

app.listen(8080);

console.log('Wow! A tiny Node app! started');