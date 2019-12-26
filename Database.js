const mongoose = require('mongoose');
const IP = 'localhost:27017';
const DATABASE = 'RateMyProfessors';
mongoose
	.set('useNewUrlParser', true)
	.set('useFindAndModify', false)
	.set('useCreateIndex', true)
	.set('useUnifiedTopology', true)
	.connect(`mongodb://${IP}/${DATABASE}`)
	.then(() => console.log('Connected to MongoDB...'))
	.catch(() => console.error('Could not connect to MongoDB...'));
