
const mongoose = require('mongoose');



const carSchema = new mongoose.Schema({
    make:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    year:{
        type:Number
    },
    mileage:{
        type:Number
    },
    fuelType:{
        type:String,
        enum:['Gasoline', 'Diesel', 'Electric', 'Hybrid'],
        default:'Gasoline'
    },
    transmission:{
        type:String,
        enum:['Automatic', 'Manual'],
        default:'Manual'
    },
    bodyStyle:{
        type:String,
        enum:['sedan', 'SUV', 'hatchback'],
        default:'SUV'
    },
    color:{
        type:String
    },
    isCertifiedPreOwned:{
        type:Boolean,
        default:false
    },
    isFourWheelDrive:{
        type:Boolean,
        default:false
    },
    isLuxury:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});



const Car = mongoose.model('Car',carSchema);


module.exports = Car