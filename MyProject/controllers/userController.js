//This Controller deals with all functionalities of User
 var User = require('../models/usersSchema').getInstance();
function userController () {
	
	
	// Creating New User
	this.createUser = function (req, res, next) {
		var userId = req.params.userId;
		var userName = req.params.userName;
		var roleId = req.params.roleId;
		var roleName = req.params.roleName;
		var availability = req.params.availability;
		var doctorCategory = req.params.doctorCategory;
		
		User.create({userId:userId,userName:userName,roleId:roleId,roleName:roleName,availability:availability,doctorCategory:doctorCategory}, function(err, result) {
			if (err) {
				console.log(err);
				return res.send({'error':err});	
			}
			else {
        return res.send({'result':result,'status':'successfully saved'});
      }
		});
	};
 
  // Fetching Details of User
  this.getUserRole = function (req, res, next) {
 console.log('inside getUserRole function')
    User.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err}); 
      }
      else {
        return res.send({'User Details':result});
      }
    });
  };
  
  
  //Fetching doctor list based on category
  this.getAvailableDoctors = function(req, res, next){
	  console.log('inside getAvailableDoctors function')
	  console.log(req.params.doctorCategory + 'request parameter');
	 var query = User.find({ 'doctorCategory': +req.params.doctorCategory}, function (err, result){
		 console.log(result);
		  if (err) {
			  console.log('inside error log');
			 return res.send(err.message);
			 }
			 console.log(result.length + 'inside results');
			 return res.send(result);
			 });
  }

  //Fetching user details by passing userId
	this.getUserDetails = function(req,res,next){
	  console.log('inside getUserDetails function')
		var query = User.find({'userId' : +req.params.userId}, function(err, result){
			if(err) {
				return res.send(err.message);
			}
			console.log(result.length + 'inside results');
			return res.send(result);
			});
	}
 
return this;
 
};
module.exports = new userController();