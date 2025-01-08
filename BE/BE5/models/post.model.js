
const mongoose = require('mongoose');
const {Schema} = mongoose

const postSchema = new Schema({
    title:String,
    content:String,
    author:{type:Schema.Types.ObjectId, ref:'user'}
})


const Post = mongoose.model('Post', postSchema);

module.exports = Post;

