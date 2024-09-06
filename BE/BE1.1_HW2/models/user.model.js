
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    birthdate:{
        type:Date,
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    profilePictureUrl:{
        type:String,
        required:true
    }
},{timestamps:true});

const user = mongoose.model('user',userSchema);


module.exports = user;