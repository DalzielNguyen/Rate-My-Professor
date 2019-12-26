var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RateSchema = new Schema(
	{
		review_id: { type: Number },
		teacher_id: { type: Number },
		username: { type: String },
		content: { type: String },
		rating: { type: Number, min: 1, max: 5 },
		is_hidden: { type: Boolean },
		like: { type: Number },
		dislike: { type: Number }
	},
	{
		collection: 'Review',
		timestamps: true
	}
);

//Export model
module.exports = mongoose.model('Rate', RateSchema);
