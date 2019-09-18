const MongoClient = require('mongodb').MongoClient;


// var user = { name: 'Kafui', age: 45 };
// var {name} = user;

// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	
	// db.collection('Todos').insertOne({
		// text: 'Something to do',
		// completed: false
	// }, (err, result) => {
		// if (err) {
			// return console.log('Unable to insert Todo');
		// }
		
		// console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	
	// insert new doc into users (name, age, location)
	db.collection('Users').insertOne({
		name: 'Kafui',
		age: 68,
		location: 'Phili'
	}, (err, result) => {
		
		if (err) {
			return console.log('Unable to insert User', err);
		}
		
		console.log(result.ops[0]._id);
	});
	
	db.close();
});