var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReactSchema = new Schema(
	{
		review_id: { type: Number },
		username: { type: String },
		react: { type: Boolean }
	},
	{ collection: 'React' }
);

//Export model
module.exports = mongoose.model('React', ReactSchema);
