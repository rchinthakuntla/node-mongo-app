var MongoClient = require('mongodb').MongoClient;

// Connection url
var url = 'mongodb://localhost:27017/TodoApp';

// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
    if (err) {
      return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');
    db.collection('Todos').find({completed:false}).count().then((count) => {
      console.log(`Total TODOs left are ${count}`);
    }, (err) => {
      console.log('Unable to fetch notes');
    });
  });

    //db.close();
