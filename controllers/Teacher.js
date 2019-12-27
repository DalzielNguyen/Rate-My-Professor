const Model = require('../models/Teacher');
const SchoolModel = require('../models/Universities');
const RateModel = require('../models/Rate');
const ReplyModel = require('../models/Reply');
const ReactModel = require('../models/React');

class TeacherController {
  async get(req, res, next) {
    const data = req.params;
    const Teacher = await Model.findOne({
      teacher_id: data.id
    }).populate('school').exec();
    let Rate = await RateModel.find({
      teacher_id: Teacher.teacher_id,
    }).populate('react').populate({
      path: 'reply',
      populate: {
        path: 'user',
      }
    }).populate('user').exec();
    let Rating = Rate.reduce((pre, cur) => {
      return pre += cur.rating;
    }, 0) / Rate.length;
    Rating = Math.round(Rating * 10) / 10;

    res.render('teacher', {
      title: Teacher.name,
      teacher: Teacher,
      rate: Rate,
      rating: Rating,
      isLogin: (req.session.username != null ? true : false),
    });
  }

  async postRate(req, res, next) {
    let json = {};
    let code = 500;
    const data = req.body;
    const Rate = await new RateModel({
      username: req.session.username,
      teacher_id: req.params.id,
      content: data.content,
      rating: data.rating,
    }).save().then(function () {
      json.message = 'Successfully!';
      code = 200;
    }).catch(function (err) {
      if (err.errors.username) {
        json.message = 'You has review this teacher!';
      }
    });
    return res.status(code).json(json);
  }

  async postReply(req, res, next) {
    let json = {};
    let code = 500;
    const data = req.body;
    const Rate = await new ReplyModel({
      username: req.session.username,
      review_id: req.params.id,
      content: data.content,
    }).save().then(function () {
      json.message = 'Successfully!';
      code = 200;
    });
    return res.status(code).json(json);
  }

  async putRate(req, res, next) {
    let json = {};
    let code = 200;
    const data = req.body;
    const React = await ReactModel.updateOne({
      username: req.session.username,
      review_id: req.params.id,
    }, {
      username: req.session.username,
      review_id: req.params.id,
      react: Boolean(parseInt(data.react)),
    }, {
      new: true,
      upsert: true,
    }, function(err, res) {
      console.log(err, res);
    });
    return res.status(code).json(json);
  }
}

module.exports = new TeacherController();