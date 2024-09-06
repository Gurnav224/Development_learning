
const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    processor:{
        type:String
    },
    ramSizeGB:{
        type:Number
    },
    storageSizeGB:{
        type:Number
    },
    screenSizeInches:{
        type:Number
    },
    isTouchscreen:{
        type:Boolean,
        default:false
    },
    hasSSD:{
        type:Boolean,
        default:false
    },
    isSaleActive:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});


const Laptop = mongoose.model('Laptop',laptopSchema);

module.exports = Laptop;