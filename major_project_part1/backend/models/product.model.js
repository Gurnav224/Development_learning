const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images:[{
    type:String,
  }],
  price: {
   type:Number,
   required:true    
  },
  rating: {
    type: Number,
    min:0,
    max:5
  },
  category:{
    type:String,
    enum: ['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories', 'Footwear', 'Underwear', 'Activewear','Others'],
    default:'Others'
  },
  brand: {
     type: String, 
     required: true
     },
});

const Product= mongoose.model("Product", ProductSchema);

module.exports = {Product}