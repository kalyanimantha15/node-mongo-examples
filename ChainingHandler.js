var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}
var server = restify.createServer();
function myHandler(req, res, next) {
    res.send(200);
    return next();
}

myHandler.handlerName = 'myRenamedHandler';

server.get(
    '/foo/:id',
    function(req, res, next) {
        console.log('Authenticate');
        console.log(req.params[0]);
  		console.log(req.params[1]);
        return next();
    },
    function(req, res, next) {
        res.send(200);
        return next();
    }
);

server.head('/hello/:name', respond);
server.listen(2000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
