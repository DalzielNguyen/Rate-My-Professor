const indexRouter = require('./routes/index');
const teacherRouter = require('./routes/teacher');

module.exports = function(app) {
  app.use('/', indexRouter);
  app.use('/teacher', teacherRouter);
}