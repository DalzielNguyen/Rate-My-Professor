const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./Universities');

const TeacherSchema = new Schema({
	teacher_id: {
		type: Number
	},
	uni_id: {
		type:	Number,
	},
	name: {
		type: String
	},
	title: {
		type: String
	},
	photo: {
		type: String
	},
	intro: {
		type: String
	},
	is_hidden: {
		type: Boolean
	}
}, {
	collection: 'Teacher',
	timestamps: true,
	toObject: {
		virtuals: true,
	}
});

TeacherSchema.virtual('school', {
  ref: 'Universities',
  localField: 'uni_id',
  foreignField: 'uni_id',
});

//Export model
module.exports = mongoose.model('Teacher', TeacherSchema);