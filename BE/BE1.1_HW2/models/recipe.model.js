const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    servings: {
      type: Number,
      required: true,
    },
    preppingTime: {
      amount: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        enum: ["minutes", "hours"],
        required: true,
      },
    },
    cookingTime: {
      amount: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        enum: ["minutes", "hours"],
        required: true,
      },
    },
    ingredients: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        unit: {
          type: String,
          required: false,
        },
      },
    ],
    directions: [
      {
        step: {
          type: Number,
          required: false,
        },
        instructions: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const recipe = mongoose.model("recipe", recipeSchema);

module.exports = recipe;
