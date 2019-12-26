var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeachingSchema = new Schema(
	{
		teacher_id: { type: Number },
		sub_id: { type: Number }
	},
	{ collection: 'Teaching' }
);

//Export model
module.exports = mongoose.model('Teaching', TeachingSchema);
