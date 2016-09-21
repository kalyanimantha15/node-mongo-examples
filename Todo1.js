// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/todoAppTest');
// Create a schema
var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});
// Create a model based on the schema
var Todo1 = mongoose.model('Todo', TodoSchema);

var todo = new Todo1({name: 'Master NodeJS', completed: false, note: 'Getting there...'});

// Save it to database
todo.save(function(err){
  if(err)
    console.log(err);
  else
    console.log(todo);
});

var callback = function (err, data) {
  if (err) { return console.error(err); }
  else { console.log(data); }
}
// Get ONLY completed tasks
/*Todo1.find({completed: true }, callback);
// Get all tasks ending with `JS`
Todo1.find({name: /JS$/ }, callback);*/

var oneYearAgo = new Date();
oneYearAgo.setYear(oneYearAgo.getFullYear() - 1);
// Get all tasks staring with `Master`, completed
Todo1.find({name: /^Master/, completed: true }, callback);
// Get all tasks staring with `Master`, not completed and created from year ago to now...
Todo1.find({name: /^Master/, completed: false }).where('updated_at').gt(oneYearAgo).exec(callback);

Todo1.update({ name: /master/i }, { completed: true }, { multi: true }, callback);
//Model.findOneAndUpdate([conditions], [update], [options], [callback])
Todo1.findOneAndUpdate({name: /JS$/ }, {completed: false}, callback);
