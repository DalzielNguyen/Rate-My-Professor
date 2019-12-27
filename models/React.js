const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./Rate');

var ReactSchema = new Schema(
	{
		review_id: {
			type: Schema.Types.ObjectId,
			ref: 'Rate',
		},
		username: {type: String},
		react: {type: Boolean}
	},
	{
		collection: 'React',
		timestamps: true
	}
);

//Export model
module.exports = mongoose.model('React', ReactSchema);
