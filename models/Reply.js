const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./Rate');

const ReplySchema = new Schema(
	{
		review_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Rate',
		},
		username: { type: String },
		content: { type: String }
	},
	{
		collection: 'Reply',
		timestamps: true
	}
);

ReplySchema.virtual('user', {
  ref: 'Users',
  localField: 'username',
  foreignField: 'username',
});

//Export model
module.exports = mongoose.model('Reply', ReplySchema);
