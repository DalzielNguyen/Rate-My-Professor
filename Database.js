const mongoose = require('mongoose');
const IP = 'localhost:27017';
const DATABASE = 'myproject';
mongoose
	.set('useNewUrlParser', true)
	.set('useFindAndModify', false)
	.set('useCreateIndex', true)
	.connect(`mongodb://${IP}/${DATABASE}`)
	.then(() => console.log('Connected to MongoDB...'))
	.catch(() => console.error('Could not connect to MongoDB...'));

// List all collections to make sure we are connecting to the right one
// mongoose.connection.on('open', function(ref) {
// 	console.log('Connected to mongo server.');
// 	//trying to get collection names
// 	mongoose.connection.db.listCollections().toArray(function(err, names) {
// 		console.log(names); // [{ name: 'dbname.myCollection' }]
// 	});
// });

// Just test if our model work ok !
// var Rate = require('./models/Rate');
// Rate.find({}, function(err, rate) {
// 	console.log(rate[0].like);
// });
// Rate = require('./models/User');
// Rate.find({}, function(err, rate) {
// 	console.log(rate);
// });
