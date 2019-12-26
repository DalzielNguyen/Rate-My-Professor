var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// report thì nếu review id bị null thì reply id có, và ngược lại
var ReportSchema = new Schema({
	review_id: { type: Number },
	reply_id: { type: Number },
	username: { type: String },
	reason: { type: String }
});

//Export model
module.exports = mongoose.model('Report', ReportSchema);
