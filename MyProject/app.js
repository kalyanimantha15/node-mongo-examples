//console.log("see")
var restify = require('restify');
var config = require('./config');

var app = restify.createServer();
app.use(restify.fullResponse());
app.use(restify.bodyParser());
app.use(restify.queryParser());

app.listen(8080, function() {
	console.log('server listening on port number', 8080);
	
});

var routes = require('./routes')(app);