
const mongoose = require('mongoose');
const {Schema} = mongoose

const CategorySchema = new Schema({
 name:{
    type:String,
    required:true
 },
 description:{
    type:String,
    required:true
 },
 icon:{
   type:String,
 },
 categoryImgUrl:{
    type:String,
 },
 subcategories:[
    {
        type:String,
    }
 ],
 featuredProducts:[
    {
        type:String
    }
 ]

},{timestamps:true})


const Category =  mongoose.model('Category',CategorySchema);

module.exports = Category;