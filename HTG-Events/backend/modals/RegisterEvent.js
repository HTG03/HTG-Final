const mongoose = require('mongoose');
const { Schema } = mongoose;
const EventRegistrationSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  studentname:{
    type: String,
    required: true
  },
  studentrollno:{
    type: String,
    required: true
  },
  studentemail:{
    type: String,
    required: true
  },
  studentmobile:{
    type: String,
    required: true
  },
  eventname:{
    type: String,
    required: true
  },
});

module.exports = mongoose.model('eventRegistration', EventRegistrationSchema);