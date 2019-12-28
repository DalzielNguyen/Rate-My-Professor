var express = require('express');
var router = express.Router();
var SearchController = require('../controllers/SearchController');
const Model = require('../models/Teacher');

router.get('/', async function (req, res, next) {
	const data = req.params;
	const Teachers = await Model.find({}).populate('school')
		.exec();
	res.render('search', {
		query: ' ',
		results: Teachers
	});
});
router.get('/:text', SearchController.getSearch);

module.exports = router;