 

 const mongoose = require('mongoose');


 const connetDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB,{dbName:'EcommerceDB'});
        if(connection){
            console.log(`successfully connected database`)
        }
    } catch (error) {
        console.error('failed to connect database')
    }
 }


 module.exports = connetDB;