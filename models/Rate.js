var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RateSchema = new Schema({
	teacher_id: { type: Number },
	username: { type: String },
	content: { type: String },
	rating: { type: Number, min: 1, max: 5 }
});

//Export model
module.exports = mongoose.model('Rate', RateSchema);
