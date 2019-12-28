const Model = require('../models/Users');
const crypto = require('crypto');
class UserController {
	getLogin(req, res, next) {
		res.render('login', {
			title: 'Login'
		});
	}

	async postLogin(req, res, next) {
		let json = {};
		let code = 500;
		const data = req.body;
		//const password = crypto.createHash('md5').update(data.password).digest('hex');
		const password = data.password;
		let userInfo = await Model.findOne({
			username: data.username
		});
		if (!userInfo)
			userInfo = await Model.findOne({
				email: data.username
			});
		if (!userInfo) json.message = 'User is not exists!';
		else if (userInfo.password == password) {
			json.message = 'Login sucessfully!';
			req.session.username = userInfo.username;
			code = 200;
		} else json.message = 'Username or Password is wrong!';
		return res.status(code).json(json);
	}

	getSignup(req, res, next) {
		res.render('register', {
			title: 'Login'
		});
	}

	async postSignup(req, res, next) {
		let json = {};
		let code = 500;
		const data = req.body;
		let newUser = await new Model({
			username: data.username,
			email: data.email,
			password: data.password,
			name: data.name
		})
			.save()
			.then(function() {
				json.message = 'Successfully!';
				req.session.username = data.username;
				code = 200;
			})
			.catch(function(err) {
				if (err.errors.username || err.errors.email) {
					json.message = 'Username or Email is has existed!';
				}
			});
		return res.status(code).json(json);
	}
}

module.exports = new UserController();
