const mongoose = require('mongoose');


async function connectDB(){
    try {
        const conn = await mongoose.connect(process.env.MONGODB,{dbName:'booksDB'});
        if(conn){
            console.log(`Successfully connected to mongodb 🔄  🗄️ , ${conn.connection.name}`)
        }
    } catch (error) {
        console.error('failed to connecting mongodb 🚨')
    }
}


module.exports = {connectDB}