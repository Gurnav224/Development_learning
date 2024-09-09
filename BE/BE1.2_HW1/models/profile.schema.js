const mongoose = require('mongoose')


const xProfileSchema = new mongoose.Schema({
    fullName:String,
    username:String,
    profilePicUrl:String,
    followingCount:Number,
    followerCount:Number,
    company:String,
    location:String,
    portfolioUrl:String,
    bio:String
  })
  
  const Profile = mongoose.model('Profile',xProfileSchema);
  
  module.exports = Profile;