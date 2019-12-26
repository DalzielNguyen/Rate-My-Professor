var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReplySchema = new Schema(
	{
		reply_id: { type: Number },
		review_id: { type: Number },
		username: { type: String },
		content: { type: String }
	},
	{
		collection: 'Reply',
		timestamps: true
	}
);

//Export model
module.exports = mongoose.model('Reply', ReplySchema);
