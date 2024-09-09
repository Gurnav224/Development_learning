const mongoose = require('mongoose')


// Access your MongoDB connection string from secrets
const mongoURI = process.env.MONGODB



// Use mongoose to connect


  async function initializeDatabase(){
    try {
     const conn = await mongoose.connect(mongoURI,{dbName:'moviesDB'})
  
     if(conn){
      console.log(`successfully connected to database 🛢 , ${conn.connection.name} \n ${conn.connection.host}`)
     }
      

    } catch (error) {
      console.error('🚨 Error connecting to MongoDB:', error)
      process.exit(1)
      
    }
  }

  
module.exports = {initializeDatabase}