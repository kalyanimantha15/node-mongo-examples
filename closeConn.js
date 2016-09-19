var mongoose = require('mongoose');

Mongoose.prototype.disconnect = function(fn) {
  var error;
  this.connections.forEach(function(conn) {
    conn.close(function(err) {
      if (error) {
        return;
      }
      if (err) {
        error = err;
      }
    });
  });

  var Promise = PromiseProvider.get();
  return new MongooseThenable(this, new Promise.ES6(function(resolve, reject) {
    fn && fn(error);
    if (error) {
      reject(error);
      return;
    }
    resolve();
  }));
};
Mongoose.prototype.disconnect.$hasSideEffects = true;