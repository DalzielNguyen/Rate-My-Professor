require('./Database');

// List all collections to make sure we are connecting to the right one
mongoose.connection.on('open', function(ref) {
	console.log('List all collections');
	//trying to get collection names
	mongoose.connection.db.listCollections().toArray(function(err, names) {
		console.log(names); // [{ name: 'dbname.myCollection' }]
	});
});

// Just test if our model work ok !
var Rate = require('./models/Rate');
Rate.find({}, function(err, rate) {
	console.log('List all Reviews');
	console.log(rate);
});
Rate = require('./models/Users');
Rate.find({}, function(err, rate) {
	console.log('List all Users');
	console.log(rate);
});

// Test if import successfully
var University = require('./models/Universities');
var unidoc = new University({
	uni_id: 7,
	name: 'Trường Đại học Sư phạm',
	address: '280 An Dương Vương, Phường 4, Quận 5, Thành phố Hồ Chí Minh',
	photo: ''
});
unidoc.save(function(err) {
	if (err) return handleError(err);
	// saved!
	University.find({}, function(err, docs) {
		console.log('List all Uni after insert');
		console.log(docs);
	});
});
