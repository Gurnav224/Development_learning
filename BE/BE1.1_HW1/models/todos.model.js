
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:['Low','High','Medium']
    },
    dueDate:{
        type:Date,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    tags:[{
        type:String
    }]
},{timestamps:true})


const todo = mongoose.model('todo',todoSchema)

module.exports = todo