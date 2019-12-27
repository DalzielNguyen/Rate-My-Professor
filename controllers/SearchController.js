const Model = require('../models/Teacher');

class SearchController {
	async getSearch(req, res, next) {
		const data = req.params;
		const Teachers = await Model.find({ $text: { $search: data.text } }).exec();
		console.log(Teachers);

		// TODO: tìm kiếm ra 1 đống data để in ở trang search
		res.render('search', { query: data.text });
	}
}

module.exports = new SearchController();
