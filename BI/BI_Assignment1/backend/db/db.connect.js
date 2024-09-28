

const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB,{dbName:'meetup_backend'});

        if(conn){
            console.log('successfully connected to database')
        }

    } catch (error) {
        console.error('failed to connect database')
    }
}


module.exports = connectDB;