

const mongoose = require('mongoose');


const fruitCardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    calories:{
        type:Number,
        required:true
    },
    carbohydrates:{
        type:Number,
        required:true
    },
    protein:{
        type:Number,
        required:true
    },
    fatUnsaturated:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    isFavourite:{
        type:Boolean,
        default:false
    }
},{timestamps:true});



const fruitCard = mongoose.model('fruitCard',fruitCardSchema);

module.exports = fruitCard;