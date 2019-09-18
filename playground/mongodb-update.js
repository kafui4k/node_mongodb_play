// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	
	// find One and Update
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5d8227e7596c2b12f29c961d')
	}, {
		$set: {
			completed: false
		}
	}, {
		retuenOriginal: false
	}).then((result) => {
		console.log(result);
	});
	
	//db.close();
});