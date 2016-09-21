var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  //createCapped(db, function() {
    createValidated(db, function() {
    db.close();
  });
});

var createCapped = function(db, callback) {
  db.createCollection("myCollection", { "capped": true, "size": 100000, "max": 5000},
    function(err, results) {
      console.log("Collection created.");
      callback();
    }
  );
};

var createValidated = function(db, callback) {
  db.createCollection("contacts", 
     {
        'validator': { '$or':
           [
              { 'phone': { '$type': "string" } },
              { 'email': { '$regex': /@mongodb\.com$/ } },
              { 'status': { '$in': [ "Unknown", "Incomplete" ] } }
           ]
        }
     },    
    function(err, results) {
      console.log("Collection created.");
      callback();
    }
  );
};