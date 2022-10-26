
const mongoose = require('mongoose');

const user = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username.'],
    minlength: [8, 'Make sure the username is greater than 8 characters.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'The Provided email is not valid',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide password.'],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
      'The password provided is not a valid',
    ],
  },
});

module.exports = mongoose.model('User',user)