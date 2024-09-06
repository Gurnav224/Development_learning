
const mongoose = require('mongoose')

const productSchema = new mongoose.schema({
    productImgUrl:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
  
    ratingAndReviews:{
        rating:{
            type:Number
        },
        reviews:{
            type:String
        }
    },
    price:{
        originalPrice:{
            type:Number,
            required:true
        },
        discountedPrice:{
            type:Number,
            required:true
        },
    },
    availableOffers:[
        {
            type:String
        }
    ],
    warranty:{
        type:String
    },
    variant:{
        type:String,
        enum: ['2023 Model - 1 Ton 3 Star', '2023 Model - 1.5 Ton 3 Star'],
        required:true
    },
    wifiConnectivity:{
        type:Boolean,
        required:true
    }
},{timeStamp:true})


const product = mongoose.model('product',productSchema);


module.exports = product