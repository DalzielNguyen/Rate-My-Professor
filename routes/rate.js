const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/Teacher');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Teacher'});
});

router.post('/:id', TeacherController.postReply);
router.put('/:id', TeacherController.putRate);

module.exports = router;
