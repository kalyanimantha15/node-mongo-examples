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

server.get({name: 'city', path: '/cities/:slug'}, /* ... */);
res.send({
  country: 'Australia',
  // render a URL by specifying the route name and parameters
  capital: server.router.render('city', {slug: 'canberra'}, {details: true})
});

server.head('/hello/:name', respond);
server.listen(2000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
console.log(myHandler);
