const mongoose = require("mongoose");

const employeeCardSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    required: true,
  },
  cardImgUrl: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const employeeCard = mongoose.model("employeeCard", employeeCardSchema);

module.exports = employeeCard;
