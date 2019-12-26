var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReplySchema = new Schema({
	review_id: { type: Number },
	username: { type: String },
	content: { type: String }
});

//Export model
module.exports = mongoose.model('Reply', ReplySchema);
