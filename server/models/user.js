var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    default: 0
  },
  location: {
    type: String,
    required: false,
    default: null
  }
});

module.exports = {
  User
}
