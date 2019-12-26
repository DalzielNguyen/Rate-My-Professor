var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeacherSchema = new Schema({
	teacher_id: { type: Number },
	uni_id: { type: Number },
	name: { type: String },
	title: { type: String },
	photo: { type: String },
	intro: { type: String },
	rating: { type: Schema.Types.Decimal128 }
});

//Export model
module.exports = mongoose.model('Teacher', TeacherSchema);
