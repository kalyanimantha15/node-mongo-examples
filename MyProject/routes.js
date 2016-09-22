module.exports = function(app) {
	console.log("hello world!");
	var user = require('./controllers/userController');
	console.log(user);
	app.get('/', function(req, res, next) {
		return res.send("WELCOME TO REST API");
	});
	
	app.post('/createUser', user.createUser); //Create user API
    app.get('/getUserRole', user.getUserRole);  // Get All user Details API
	app.get('/getAvailbleDoctors/:doctorCategory', user.getAvailableDoctors); //Get available doctors
	app.get('/getUserDetails/:userId', user.getUserDetails);
 
};