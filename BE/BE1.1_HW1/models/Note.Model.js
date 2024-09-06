
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['Personal','Work','Study','Idea','Journal','Other'],
        default:'Other'
    },
    tags:[
        {type:String}
    ]
},{timestamps:true})


const Note = mongoose.model('Note',noteSchema);

module.exports = Note;