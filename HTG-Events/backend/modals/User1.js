const mongoose = require('mongoose')
const { Schema } = mongoose;

const User1Schema = new Schema({
  cllgname:{
    type: String,
    required: true
  }, 
  cllgemail:{
    type: String,
    required: true,
    unique: true
  },
  address:{
    type: String,
    required: true
  }, 
  password:{
    type: String,
    required: true
  },
  date:{ 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model('user1', User1Schema);