var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SubjectSchema = new Schema(
	{
		sub_id: { type: Number },
		name: { type: String }
	},
	{ collection: 'Subject',
	timestamps: true}
);

//Export model
module.exports = mongoose.model('Subject', SubjectSchema);
