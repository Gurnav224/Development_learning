const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: [
      {
        type: String,
        required: true,
      },
    ],
    rating: {
      type: Number,
      min:0,
      max:10,
      default:0
    },
    reviewsAndRatings: {
      ratings: {
        type: Number,
        required: true,
      },
      reviews: {
        type: Number,
        required: true,
      },
    },
    price: {
      originalPrice: {
        type: Number,
        required: true,
      },
      discountedPrice: {
        type: Number,
        required: true,
      },
    },
    stocks: {
      type: Number,
      required: true,
    },
    isDiscountApplicable: {
      type: Boolean,
      default: false,
    },
    onSale: {
      type: Boolean,
      default: false,
    },
    imgUrl: [
      {
        type: String,
        required: true,
      },
    ],
    isFavourite: {
      type: Boolean,
      required: true,
    },
    promotionalMessage: {
      type: String,
      required: false
    },
  },
  { timestamps: true }
);

const Product = require("Product", productSchema);

module.exports = Product;
