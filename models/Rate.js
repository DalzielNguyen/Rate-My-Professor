const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

require('./React');
require('./Reply');
const RateSchema = new Schema({
	teacher_id: {
		type: Number
	},
	username: {
		type: String,
	},
	content: {
		type: String
	},
	rating: {
		type: Number,
		min: 1,
		max: 5
	},
	is_hidden: {
		type: Boolean,
		default: false,
	},
}, {
	collection: 'Review',
	timestamps: true
});

RateSchema.virtual('react', {
	ref: 'React',
	localField: '_id',
  foreignField: 'review_id',
});

RateSchema.virtual('reply', {
	ref: 'Reply',
	localField: '_id',
  foreignField: 'review_id',
});

RateSchema.virtual('user', {
  ref: 'Users',
  localField: 'username',
  foreignField: 'username',
});

RateSchema.index({ teacher_id: 1, username: 1 }, { unique: true });

RateSchema.plugin(uniqueValidator);

//Export model
module.exports = mongoose.model('Rate', RateSchema);