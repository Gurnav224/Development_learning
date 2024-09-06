const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  availableColors: [
    {
      type: String,
      enum: ["Blue", "Red", "Green", "Orange", "Black"],
      default: "Blue",
    },
  ],
  availableSizes: [
    {
      type: Number,
      enum: [7, 8, 9, 10, 11],
    },
  ],
  productImgUrl: {
    type: String,
    required: true,
  },
  shareUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
isAvailable: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
