const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  eventType:{
    type:String,
    enum:['Online','Offline','Both'],
    default:"Both"
  },
  details: {
    type: String,
  },
  dressCode: {
    type: String,
  },

  ageRestrictions: {
    type: String,
    default: "18 or Above",
  },
  location:{
    type:String
  },
  venue:{
    type:String
  },
  tags: [
    {
      type: String,
    },
  ],
  startingTime: {
    type: Date,
  },
  endingTime: {
    type: Date,
  },
  price: {
    type: Number,
    default: 0,
  },
  speakers: [
    {
      name: {
        type:String,
        required:true
      },
      department: {
        type:String,
        required:true
      },
      bio: {
        type:String,
        required:true
      },
      profilePic:{
        type:String,
        required:true
      },
    },
  ],
 
},{timestamps:true});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
