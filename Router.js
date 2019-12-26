const indexRouter = require('./routes/index');
const teacherRouter = require('./routes/teacher');
const userRouter = require('./routes/user');

module.exports = function(app) {
  app.use('/', indexRouter);
  app.use('/teacher', teacherRouter);
  app.use('/user', userRouter);
}