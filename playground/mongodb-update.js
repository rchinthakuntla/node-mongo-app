// They called it Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

// Connection url
var url = 'mongodb://localhost:27017/TodoApp';

// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
    if (err) {
      return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB server');
    db.collection('Todos').findOneAndUpdate(
      {
      _id: new ObjectID('5a1cebe4c6e336fd3ca586e7')
      },
      {
        $set: {
          text: 'Ravee is awesome'
        }
      },
      {
          returnOriginal: false
      }
    ).then((result) => {
      console.log(JSON.stringify(result, undefined, 4));
    }, (err) => {

    })
  });

    //db.close();
