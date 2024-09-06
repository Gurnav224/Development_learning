 const mongoose = require('mongoose')
 
 // exercise 2  introduce the "Car" model

  const CarSchema = new mongoose.Schema({
    make:String,
    model:String,
    year:Number
  })

  const Car = mongoose.model('Car',CarSchema);

  module.exports = Car;