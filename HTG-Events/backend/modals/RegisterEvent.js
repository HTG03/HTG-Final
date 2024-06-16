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
  studentbranch:{
    type:String,
    required: true
  },
  studentyear:{
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
  eventdate:{
    type: String,
    required: true
  },
  eventtime:{
    type: String,
    required: true
  },
  eventlocation: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('eventRegistration', EventRegistrationSchema);