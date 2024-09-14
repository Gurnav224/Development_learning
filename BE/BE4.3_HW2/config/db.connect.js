
const mongoose = require('mongoose');


const MONGODB_URI = process.env.MONGODB;

async function initializeDatabase(){
    try {
        const conn = await mongoose.connect(MONGODB_URI,{dbName:'HotelDB'})
        console.log('successfully connected to datbase 🔄 🛢️ ',conn.connection.name)
    } catch (error) {
        console.error(` ❗🚨 error to connected database , `,error)
    }
}


module.exports = {initializeDatabase};