const Model = require('../models/Teacher');

class SearchController {
	async getSearch(req, res, next) {
		const data = req.params;
		let regx = new RegExp(data.text, 'i');
		const Teachers = await Model.find({
			$or: [ { name: regx }, { title: regx } ]
		}).exec();
		console.log(Teachers);
		console.log(Teachers.length);
		// TODO: tìm kiếm ra 1 đống data để in ở trang search
		res.render('search', { query: data.text, len_res: Teachers.length, list_res: Teachers });
	}
	async postSearch(req, res, next) {
		let json = {};
		let code = 200;
		const data = req.body;
		res.redirect('/search/' + data.data);
		return res.status(code).json(json);
	}
}

module.exports = new SearchController();
