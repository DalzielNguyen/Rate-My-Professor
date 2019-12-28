const Model = require('../models/Teacher');
const SchoolModel = require('../models/Universities');
const RateModel = require('../models/Rate');
const ReplyModel = require('../models/Reply');
const ReactModel = require('../models/React');

class IndexController {
	async postSearch(req, res, next) {
		let json = {};
		let code = 200;
		const data = req.body;
		console.log(data);
		res.redirect('/search/' + data.data);
		return res.status(code).json(json);
	}
}

module.exports = new IndexController();
