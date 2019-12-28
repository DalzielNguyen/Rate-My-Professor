const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
require('./Universities');

const TeacherSchema = new Schema(
	{
		teacher_id: {
			type: Number
		},
		uni_id: {
			type: Number
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
	},
	{
		collection: 'Teacher',
		timestamps: true,
		toObject: {
			virtuals: true
		}
	}
);

TeacherSchema.plugin(uniqueValidator);

TeacherSchema.virtual('school', {
	ref: 'Universities',
	localField: 'uni_id',
	foreignField: 'uni_id'
});
TeacherSchema.index({ name: 'text', title: 'text' });

//Export model
module.exports = mongoose.model('Teacher', TeacherSchema);
