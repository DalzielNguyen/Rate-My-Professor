const Model = require('../models/Teacher');

class SearchController {
	async getSearch(req, res, next) {
		const data = req.params;
		let regx = new RegExp(data.text, 'i');
		const Teachers = await Model.find({
				$or: [{
					name: regx
				}, {
					title: regx
				}]
			}).populate('school')
			.exec();
		// TODO: tìm kiếm ra 1 đống data để in ở trang search
		res.render('search', {
			query: data.text,
			results: Teachers
		});
	}

}

module.exports = new SearchController();