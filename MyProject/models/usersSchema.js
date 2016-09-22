// Model for the Student 

var mongoose = require('../db').mongoose;
 
 var schema = {
	 userId:{type: String, required: true},
		userName: {type: String, required: true},
		roleId:{type: String, required: true},
		roleName: {type: String, required: true},
		availability: {type: String, required: false},
		doctorCategory: {type: String, required: false},
};

var userSchema = mongoose.Schema(schema);

module.exports.getInstance = function(){
	
	return mongoose.model('users', userSchema);
};