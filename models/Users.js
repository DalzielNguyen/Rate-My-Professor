const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		default: null
	},
	school: {
		type: String,
		default: null
	},
	is_admin: {
		type: Boolean,
		default: 0
	},
	password: {
		type: String,
		required: true
	},
	unlock: {
		type: Date,
		default: 0
	}
}, {
	collection: 'Users',
	timestamps: true
});

UsersSchema.plugin(uniqueValidator);

//Export model
module.exports = mongoose.model('Users', UsersSchema);