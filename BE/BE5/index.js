const connectDB = require("./db/db.connect");
const Post = require("./models/post.model");
const User = require("./models/user.model");



connectDB();

const userData = {
    name:"abhi",
    email:"abhi@gmail.com"
}

async function addUserData(){
    try {
        const user = new User(userData);
        await user.save();
        console.log('user', user)
    } catch (error) {
        console.error('error',error)
    }
}

// addUserData()

const postData = {
    title:"completd redux",
    content:"today I have completed the redux lesson",
    author:"674d39ae06dcb7643616be48"
}

async function addPostData(){
    try {
        const post = new Post(postData);
        await post.save();
        console.log('post', post)
    } catch (error) {
        console.error('error',error)
    }
}

// addPostData();


async function getData(){
    try {
        const data = await Post.find({}).populate('author');
        console.log('data', data)
    } catch (error) {
        console.error('error',error)
    }
}

getData();