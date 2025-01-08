const mongoose = require('mongoose');

const mongo_uri = process.env.MONGODB_URI;

async function connectDB() {
    try {
        await mongoose.connect(mongo_uri,{dbName:'be5'});
        console.log('successfully connected to database')
    } catch (error) {
        console.error('failed to connect to datbase',error)
    }
}

module.exports = connectDB;