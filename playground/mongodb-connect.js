var MongoClient = require('mongodb').MongoClient;

// Connection url
var url = 'mongodb://localhost:27017/TodoApp';

// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
    if (err) {
      return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');
    db.collection('Users').insertOne({
      name: 'Ravee Chintha',
      age: 25,
      location: 'Chandler,AZ'
    }, (err, results) => {
      if (err) {
        return console.log('Unable to insert user',err);
      }

      console.log(JSON.stringify(results.ops, undefined, 4));

    })
    db.close();
  });
