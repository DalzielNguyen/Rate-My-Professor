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
var model = require('./models/Rate');
model.find({}, function(err, model) {
	console.log('List all Reviews');
	console.log(model);
});
model = require('./models/Users');
model.find({}, function(err, model) {
	console.log('List all Users');
	console.log(model);
});

// Test if import successfully
var University = require('./models/Universities');
var unidoc = new University({
	uni_id: 7,
	name: 'Trường Đasdasd',
	address: '280 An asdasdasd',
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
