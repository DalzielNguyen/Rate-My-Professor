const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database name
const dbname = 'RateMyProfessors';

// Create a new MongoClient
const client = new MongoClient(url);

const insertUni = function(db, callback) {
	// Get the documents collection

	const collection = db.collection('Universities');
	// Insert some documents
	collection.insertMany(
		[
			{
				uni_id: 0,
				name: 'Trường Đại học Bách khoa',
				address: '268 Lý Thường Kiệt, phường 14, Quận 10, Thành phố Hồ Chí Minh',
				photo: ''
			},
			{
				uni_id: 1,
				name: 'Trường Đại học Khoa học Tự nhiên',
				address: '227 đường Nguyễn Văn Cừ, quận 5, Thành phố Hồ Chí Minh',
				photo: ''
			},
			{
				uni_id: 2,
				name: 'Trường Đại học Khoa học Xã hội và Nhân văn',
				address: '10–12 Đinh Tiên Hoàng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
				photo: ''
			},
			{
				uni_id: 3,
				name: 'Trường Đại học Quốc tế',
				address: 'Khu phố 6, phường Linh Trung, quận Thủ Đức, Thành phố Hồ Chí Minh',
				photo: ''
			},
			{
				uni_id: 4,
				name: 'Trường Đại học Sư phạm',
				address: '280 An Dương Vương, Phường 4, Quận 5, Thành phố Hồ Chí Minh',
				photo: ''
			}
		],
		function(err, result) {
			assert.equal(err, null);
			// assert.equal(2, result.result.n);
			// assert.equal(2, result.ops.length);
			console.log('Inserted Universities success');
			callback(result);
		}
	);
};

const insertUsers = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('Users');
	// Insert some documents
	collection.insertMany(
		[
			{
				username: 'ltloc',
				name: 'Lâm Thành Lộc',
				avatar: '',
				password: '123456',
				is_admin: 1,
				created: '12/06/2017',
				unlock: '',
				email: 'ltloc@gmail.com',
			},
			{
				username: 'vhthieu',
				name: 'Võ Hoàng Trung Hiếu',
				avatar: '',
				password: '123456',
				is_admin: 0,
				created: '08/01/2018',
				unlock: '',
				email: 'vhthieu@gmail.com',
			},
			{
				username: 'ptthang',
				name: 'Phạm Trọng Thắng',
				avatar: '',
				password: '123456',
				is_admin: 0,
				created: '13/01/2019',
				unlock: '',
				email: 'ptthang@gmail.com',
			},
			{
				username: 'tkrac',
				name: 'Nguyễn Văn X',
				avatar: '',
				password: '123456',
				is_admin: 0,
				created: '24/02/2019',
				unlock: '',
				email: 'tkrac@gmail.com',
			},
			{
				username: 'nlsang',
				name: 'Nguyễn Lê Sang',
				avatar: '',
				password: '123456',
				is_admin: 0,
				created: '02/04/2019',
				unlock: '',
				email: 'nlsang@gmail.com',
			},
			{
				username: 'vhy',
				name: 'Vương Hy',
				avatar: '',
				password: '123456',
				is_admin: 0,
				created: '25/12/2019',
				unlock: '01/01/2020',
				email: 'vhy@gmail.com',
			}
		],
		function(err, result) {
			assert.equal(err, null);
			// assert.equal(2, result.result.n);
			// assert.equal(2, result.ops.length);
			console.log('Inserted Users success');
			callback(result);
		}
	);
};
const insertTeacher = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('Teacher');
	// Insert some documents
	collection.insertMany(
		[
			{
				teacher_id: 0,
				uni_id: 1,
				name: 'Trần Minh Triết',
				title: 'PGS. TS.',
				photo: '',
				verified: 1,
				intro:
					' Là sinh viên CNTT của trường Đại học Khoa Học Tự Nhiên, không ai không biết đến PGS.TS Trần Minh Triết. Tốt nghiệp Thủ khoa Cử nhân ngành CNTT ĐH KHTN TP.HCM, tốt nghiệp Thủ khoa và bảo vệ thành công luận văn Thạc sĩ với kết quả xuất sắc, bảo vệ loại xuất sắc luận án Tiến sĩ, PGS.TS Trần Minh Triết từng 2 lần nhận giải thưởng MVP (Most Valuable Professional) của Microsoft.',
				is_hidden: 0,
				rating: 5.0
			},
			{
				teacher_id: 1,
				uni_id: 1,
				name: 'Đinh Bá Tiến',
				title: 'TS.',
				photo: '',
				verified: 1,
				intro:
					'Năm 2004, khi mới chỉ 25 tuổi và đang theo chương trình nghiên cứu sinh tiến sĩ về tin học tại Đại học Huddersfield ở Anh. Đinh Bá Tiến đã vượt qua hàng trăm ứng viên khác trên khắp thế giới và được tuyển chọn vào chương trình nghiên cứu trí thông minh nhân tạo của NASA để chế tạo các phần mềm điều khiển robot, phi thuyền tự hành.',
				is_hidden: 0,
				rating: 5.0
			}
		],
		function(err, result) {
			assert.equal(err, null);
			// assert.equal(2, result.result.n);
			// assert.equal(2, result.ops.length);
			console.log('Inserted Teacher success');
			callback(result);
		}
	);
};
const insertReview = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('Review');
	// Insert some documents
	collection.insertMany(
		[
			{
				review_id: 0,
				teacher_id: 0,
				username: 'vhy',
				rating: 4,
				content: 'ôi idol của em',
				is_hidden: 0,
				like: 2,
				dislike: 1
			},
			{
				review_id: 1,
				teacher_id: 0,
				username: 'ptthang',
				rating: 5,
				content: 'ôi idol của em',
				is_hidden: 0,
				like: 3,
				dislike: 1
			},
			{
				review_id: 2,
				teacher_id: 1,
				username: 'nlsang',
				rating: 4,
				content: 'ôi idol của em',
				is_hidden: 0,
				like: 1,
				dislike: 1
			},
			{
				review_id: 3,
				teacher_id: 0,
				username: 'tkrac',
				rating: 1,
				content: 'ôi idol của em',
				is_hidden: 1,
				like: 0,
				dislike: 4
			},
			{
				review_id: 4,
				teacher_id: 1,
				username: 'tkrac',
				rating: 1,
				content: 'ôi idol của em',
				is_hidden: 0,
				like: 0,
				dislike: 3
			},
			{
				review_id: 5,
				teacher_id: 1,
				username: 'ptthang',
				rating: 5,
				content: 'ôi idol của em',
				is_hidden: 0,
				like: 3,
				dislike: 0
			}
		],
		function(err, result) {
			assert.equal(err, null);
			// assert.equal(2, result.result.n);
			// assert.equal(2, result.ops.length);
			console.log('Inserted Review success');
			callback(result);
		}
	);
};

const insertReply = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('Reply');
	// Insert some documents
	collection.insertMany(
		[
			{ reply_id: 0, review_id: 1, username: 'ptthang', content: 'Phải cho 5 sao chứ :))' },
			{ reply_id: 1, review_id: 3, username: 'vhy', content: 'Đã report' },
			{ reply_id: 2, review_id: 3, username: 'nlsang', content: 'Report' },
			{ reply_id: 3, review_id: 4, username: 'vhthieu', content: '???' }
		],
		function(err, result) {
			assert.equal(err, null);
			// assert.equal(2, result.result.n);
			// assert.equal(2, result.ops.length);
			console.log('Inserted Reply success');
			callback(result);
		}
	);
};

const insertReport = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('Report');
	// Insert some documents
	collection.insertMany(
		[
			{ report_id: 0, username: 'vhy', review_id: 3, reply_id: null, reason: '', processed: 0 },
			{ report_id: 1, username: 'nlsang', review_id: 3, reply_id: null, reason: '', processed: 0 },
			{ report_id: 2, username: 'tkrac', review_id: null, reply_id: 1, reason: '', processed: 0 },
			{ report_id: 3, username: 'tkrac', review_id: null, reply_id: 2, reason: '', processed: 0 }
		],
		function(err, result) {
			assert.equal(err, null);
			// assert.equal(2, result.result.n);
			// assert.equal(2, result.ops.length);
			console.log('Inserted Report success');
			callback(result);
		}
	);
};

const insertReact = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('React');
	// Insert some documents
	collection.insertMany(
		[
			{ username: 'nlsang', review_id: 0, react: 1 },
			{ username: 'vhthieu', review_id: 0, react: 1 },
			{ username: 'ptthang', review_id: 0, react: 0 },
			{ username: 'vhy', review_id: 1, react: 1 },
			{ username: 'nlsang', review_id: 1, react: 1 },
			{ username: 'vhthieu', review_id: 1, react: 1 },
			{ username: 'tkrac', review_id: 1, react: 0 },
			{ username: 'vhy', review_id: 2, react: 1 },
			{ username: 'tkrac', review_id: 2, react: 0 },
			{ username: 'ptthang', review_id: 3, react: 0 },
			{ username: 'nlsang', review_id: 3, react: 0 },
			{ username: 'vhthieu', review_id: 3, react: 0 },
			{ username: 'vhy', review_id: 3, react: 0 },
			{ username: 'vhy', review_id: 4, react: 0 },
			{ username: 'ptthang', review_id: 4, react: 0 },
			{ username: 'nlsang', review_id: 4, react: 0 },
			{ username: 'vhy', review_id: 5, react: 1 },
			{ username: 'vhthieu', review_id: 5, react: 1 },
			{ username: 'nlsang', review_id: 5, react: 1 },
			{ username: 'ptthang', review_id: 6, react: 1 },
			{ username: 'vhy', review_id: 6, react: 1 },
			{ username: 'nlsang', review_id: 6, react: 1 },
			{ username: 'tkrac', review_id: 6, react: 0 }
		],
		function(err, result) {
			assert.equal(err, null);
			// assert.equal(2, result.result.n);
			// assert.equal(2, result.ops.length);
			console.log('Inserted React success');
			callback(result);
		}
	);
};

const insertSubject = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('Subject');
	// Insert some documents
	collection.insertMany(
		[
			{ sub_id: 0, name: 'Phương pháp nghiên cứu khoa học' },
			{ sub_id: 1, name: 'Phát triển phần mềm cho thiết bị di động' },
			{ sub_id: 2, name: 'Nhập môn công nghệ phần mềm' }
		],
		function(err, result) {
			assert.equal(err, null);
			// assert.equal(2, result.result.n);
			// assert.equal(2, result.ops.length);
			console.log('Inserted Subject success');
			callback(result);
		}
	);
};

const insertTeaching = function(db, callback) {
	// Get the documents collection
	const collection = db.collection('Teaching');
	// Insert some documents
	collection.insertMany(
		[ { teacher_id: 0, sub_id: 0 }, { teacher_id: 0, sub_id: 1 }, { teacher_id: 1, sub_id: 2 } ],
		function(err, result) {
			assert.equal(err, null);
			// assert.equal(2, result.result.n);
			// assert.equal(2, result.ops.length);
			console.log('Inserted Teaching success');
			callback(result);
		}
	);
};

// Use connect method to connect to the Server
client.connect(function(err) {
	assert.equal(null, err);
	console.log('Connected successfully to server');

	const db = client.db(dbname);
	insertTeacher(db, function() {});
	insertUsers(db, function() {});
	insertReview(db, function() {});
	insertReport(db, function() {});
	insertReact(db, function() {});
	insertReply(db, function() {});
	insertTeaching(db, function() {});
	insertSubject(db, function() {});
	insertUni(db, function() {
		client.close();
	});
});
