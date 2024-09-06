

const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        enum:['Italian','Mexican','Chinese','Indian','American','French','Japanese','Mediterranean','Thai','Vegetarian','Vegan','Other'],
        default:'Other'
    },
    location:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    openingYear:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    specialDishes:[
        {
            type:String
        }
    ],
    photoUrls:[
        {
            type:String
        }
    ]
},{timestamps:true})


const Restaurants = mongoose.model('Restaurant',RestaurantSchema);


module.exports = Restaurants;