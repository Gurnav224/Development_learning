

const mongoose = require('mongoose');

const {Schema} = mongoose;


const RecipeSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        enum:['Easy', 'Intermediate', 'Diffcult'],
        required:true
    },
    prepTime:{
        type:Number,
        required:true
    },
    cookTime:{
        type:Number,
        required:true
    },
    ingredients:[
        {
            type:String,
            required:true
        }
    ],
    instructions:[
        {
            type:String,
            required:true
        }
    ],
    imageUrl:{
        type:String,
        required:true
    }

},{timestamps:true})


const Recipe = mongoose.model('Recipe',RecipeSchema);


module.exports = {Recipe}