// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


// var user = { name: 'Kafui', age: 45 };
// var {name} = user;

// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	
	db.collection('Users').find({
		// _id: new ObjectID('id value here 869wujsw67w');
		// completed: false
		name: 'Joes'
		}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unabel to fetch todos', err);
	});
	
	//db.close();
});