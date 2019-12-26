var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema(
	{
		username: { type: String },
		email: { type: String },
		name: { type: String },
		avatar: { type: String },
		is_admin: { type: Boolean },
		password: { type: String },
		unlock: { type: Date }
	},
	{ collection: 'Users',
	timestamps: true}
);

//Export model
module.exports = mongoose.model('Users', UsersSchema);
