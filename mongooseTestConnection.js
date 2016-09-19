var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var movieSchema = new mongoose.Schema({
  title: { type: String }
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
})
var Movie = mongoose.model('Movie', movieSchema);
var thor = new Movie({
  title: 'Thor'
, rating: 'PG-13'
, releaseYear: '2011'  
, hasCreditCookie: true
});
thor.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});
Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});
mongoose.connection.close()