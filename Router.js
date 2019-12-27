const indexRouter = require('./routes/index');
const teacherRouter = require('./routes/teacher');
const userRouter = require('./routes/user');
const rateRouter = require('./routes/rate');
const searchRouter = require('./routes/search');

module.exports = function(app) {
	app.use('/', indexRouter);
	app.use('/teacher', teacherRouter);
	app.use('/rate', rateRouter);
	app.use('/user', userRouter);
	app.use('/search', searchRouter);
};
