const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema({
  cardHolder: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  expirationMonth: {
    type: Number,
    required: true,
    min:1,
    max:12
  },
  expirationYear: {
    type: Number,
    required: true,
    min:new Date().getFullYear()
  },
  cardNetwork: {
    type:String,
    enum:["Visa","MasterCard","American Express"],
    required:true
  },
  issuerName: {
    type: String,
    required: true,
  },
});

const creditCard = mongoose.model("creditCard", creditCardSchema);

module.exports = creditCard;
