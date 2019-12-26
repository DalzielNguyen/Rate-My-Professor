var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UniversitiesSchema = new Schema({
	uni_id: {
		type: Number
	},
	name: {
		type: String
	},
	address: {
		type: String
	},
	photo: {
		type: String
	}
}, {
	collection: 'Universities',
	timestamps: true
});

//Export model
module.exports = mongoose.model('Universities', UniversitiesSchema);