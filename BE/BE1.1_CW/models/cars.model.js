const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;

const StudentSchema = new mongoose.Schema({
  registrationNumber: String,
  studentId: String,
  StudentName: String,
  studentProfileImgUrl: String,
  emergencyContact: Number,
  standard: String,
  fatherOrGaurdian: String,
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;

const videoSchema = new mongoose.Schema({
  title: String,
  channelName: String,
  channelLogoUrl: String,
  viewsCount: Number,
  datePosted: Date,
  thumbnailUrl: String,
  duration: String,
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;

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


const movieSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  releaseYear:{
    type:Number,
    required:true
  },
  genre:[
    {
      type:String,
      enum:['Action','Drama','Comedy','Romance','Thriller','Fantasy','Sci-Fi','Horror','Sports','Musical','Other']
    }
  ],
  director:{
    type:String,
    required:true
  },
  actors:[
    {
      type:'String',
    }
  ],
  language:{
    type:String,
    required:true
  },
  country:{
    type:String,
    default:'India'
  },
  rating:{
    type:Number,
    min:0,
    max:10,
    default:0
  },
  plot:{
    type:String
  },
  awards:{
    type:String
  },
  posterUrl:{
    type:String
  },
  trailerUrl:{
    type:String
  }
},{timestamps:true});


const Movie = mongoose.model('Movie',movieSchema);


module.exports = Movie;