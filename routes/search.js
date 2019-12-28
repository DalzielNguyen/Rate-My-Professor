var express = require('express');
var router = express.Router();
var SearchController = require('../controllers/SearchController');
const Model = require('../models/Teacher');

router.get('/', async function(req, res, next) {
	const data = req.params;
	const Teachers = await Model.find({}).exec();
	console.log(Teachers);
	console.log(Teachers.length);
	// TODO: tìm kiếm ra 1 đống data để in ở trang search
	res.render('search', { query: ' ', len_res: Teachers.length, list_res: Teachers });
});
router.post('/', SearchController.postSearch);

router.get('/:text', SearchController.getSearch);
router.post('/:old_text', SearchController.postSearch);
module.exports = router;
