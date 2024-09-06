

const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        enum:[ 'Rock', 'Pop', 'Hip-Hop', 'Jazz', 'Classical', 'Country', 'Electronic', 'R&B', 'Reggae', 'Indie'],
        required:true
    },
    releaseYear:{
        type:Number
    },
    recordLabel :{
        type:String
    },
    format:{
        type:String,
        enum:['CD', 'Vinyl', 'Digital']
    },
    isExplicit:{
        type:Boolean,
        default:false
    },
    isAvailableOnStreaming:{
        type:Boolean,
        default:false
    },
    isFeatured:  {
        type:Boolean,
        default:false
    }

},{timestamps:true})


const album = new mongoose.model('album',albumSchema);

module.exports = album;