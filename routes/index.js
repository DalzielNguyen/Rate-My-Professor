var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController');
router.get('/', function(req, res, next) {
	res.render('home', { title: 'Express' });
});

router.post('/', IndexController.postSearch);

module.exports = router;
