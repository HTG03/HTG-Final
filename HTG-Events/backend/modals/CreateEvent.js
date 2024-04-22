const mongoose = require('mongoose');
const { Schema } = mongoose;
const EventSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  eventname:{
    type: String,
    required: true
  },
  eventdescription:{
    type: String,
    required: true
  },
  eventdate:{
    type: String,
    required: true
  },
  eventemail:{
    type: String,
    required: true
  },
  eventPhone:{
    type: String,
    required: true
  },    
  eventaddress:{
    type: String,
    required: true
  },
});

module.exports = mongoose.model('event', EventSchema);