const mongoose = require("mongoose");

const { Schema } = mongoose;

const HotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: [
      {
        type: String,
        enum: ["Budget", "Mid-Range", "Luxury", "Boutique", "Resort", "Other"],
        required: true,
      },
    ],
    location: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviews: [
      {
        type: String,
      },
    ],
    website: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    checkInTime: {
      type: String,
      required: true,
    },
    checkOutTime: {
      type: String,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    priceRange: {
      type: String,
      enum: ["$$ (11-30)", "$$$ (31-60)", "$$$$ (61+)", "Other"],
    },
    reservationsNeeded: {
      type: Boolean,
      default: false,
    },
    isParkingAvailable: {
      type: Boolean,
      default: false,
    },
    isWifiAvailable: {
      type: Boolean,
      default: false,
    },
    isPoolAvailable: {
      type: Boolean,
      default: false,
    },
    isSpaAvailable: {
      type: Boolean,
      default: false,
    },
    isRestaurantAvailable: {
      type: Boolean,
      default: false,
    },
    photos: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;