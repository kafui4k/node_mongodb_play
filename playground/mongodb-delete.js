// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	
	// delete many Todos
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
		// console.log(result);
	// });
	
	// delete One Todo
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
		// console.log(result);
	// });
	
	// fins One Todo and delete
	db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) =>{
		console.log(result);
	});
	
	//db.close();
});