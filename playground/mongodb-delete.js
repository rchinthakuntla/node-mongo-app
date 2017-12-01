var MongoClient = require('mongodb').MongoClient;

// Connection url
var url = 'mongodb://localhost:27017/TodoApp';

// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
    if (err) {
      return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');
    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
      console.log(JSON.stringify(result, undefined, 4));
    }, (err) => {

    })
  });

    //db.close();
