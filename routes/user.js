const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User');

router.get('/', function(req, res, next) {
	res.render('home', { title: 'Trang chủ' });
});

router.get('/login', UserController.getLogin);
router.post('/login', UserController.postLogin);

router.get('/signup', UserController.getSignup);
router.post('/signup', UserController.postSignup);

module.exports = router;
