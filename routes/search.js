var express = require('express');
var router = express.Router();
var SearchController = require('../controllers/SearchController');
router.get('/', function(req, res, next) {
	res.render('search', { title: 'Express' });
});

router.get('/:text', SearchController.getSearch);

module.exports = router;
