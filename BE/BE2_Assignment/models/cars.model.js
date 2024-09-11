const mongoose = require('mongoose');

const { Schema } = mongoose;


const carSchema =  new Schema({
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    bodyStyle:{
        type:String,
        required:true
    },
    fuelType:{
        type:String,
        enum:['Gasoline','Diesel','Electric','Hybrid','Other'],
        default:'Gasoline',
        required:true
    },
    transmission:{
        type:String,
        enum:['Manual','Automatic','Other'],
        default:'Manual',
        required:true
    },
    engine:{
        type:String,
        required:true
    },
    mileage:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    condition:{
        type:String,
        enum:['New','Used'],
        default:'New',
        required:true
    },
    description:{
        type:String
    },
    photos:[{
        type:String
    }],
    inMarket:{
        type:Boolean,
        default:true
    }

},{timestamps:true})


const Car = mongoose.model('Car',carSchema)


module.exports = Car;