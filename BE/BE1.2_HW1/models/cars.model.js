const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;




