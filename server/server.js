var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
  var newTodo = new Todo({
    text: req.body.text,
    completed: false,
    completedAt: Date.now()
  });

  newTodo.save().then((doc) => {
    res.status(200).send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(3000, () => {
  console.log('Starting on port 3000');
})




// var newUser = new User({
//   name: 'Ravee Chintha',
//   age: 37
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user', doc);
// }, (error) => {
//   console.log('Unable to save user',error);
// });
