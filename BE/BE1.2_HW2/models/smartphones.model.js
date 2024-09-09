const mongoose = require("mongoose");

const smartphoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    operatingSystem: {
      type: String,
      enum: ["iOS", "Android", "Windows", "Other"],
      default: "Other",
    },
    displaySize: {
      type: String,
      enum: ["5.5 inches", "6.2 inches", "6.7 inches"],
      default: "5.5 inches",
    },
    storage: {
      type: String,
      enum: ["64 GB", "128 GB", "256 GB"],
      default: "64 GB",
    },
    ram: {
      type: String,
      enum: ["4 GB", "6 GB", "8 GB"],
      default: "4 GB",
    },
    cameraSpecs: {
      cameraName: {
        type: String,
      },
      megaPixelCount: {
        megaPixelCount: Number,
      },
      lensType: {
        type: String,
        enum: ["Wide", "Telephoto", "Macro", "Other"],
      },
      cameraFeatures: {
        type: String,
        enum: ["Autofocus", "Optical Zoom", "Night Mode", "HDR"],
      },
    },
    batteryCapacity: {
      type: String,
      enum: ["4000mAh", "5000mAh"],
      default: "4000mAh",
    },
    connectivity: [
      {
        type: String,
        enum: ["4G LTE", "5G", "Wi-Fi", "Bluetooth", "NFC"],
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    colorsAvailable: [
      {
        type: String,
        enum: ["Black", "White", "Blue", "Red"],
      },
    ],
    features: [
      {
        type: String,
        enum: ["Waterproof", "Face Recognition", "Fingerprint Scanner"],
      },
    ],
  },
  { timestamps: true }
);

const smartphone = mongoose.model("smartphone", smartphoneSchema);

module.exports = smartphone;
