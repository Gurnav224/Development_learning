const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Thriller",
        "Science Fiction",
        "Fantasy",
        "Romance",
        "Histroical",
        "Biography",
        "Self-help",
        "Other",
      ],
      default: "Other",
    },
    language: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "United States",
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    summary: {
      type: String,
    },
    coverImageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Books = mongoose.model("Books", BookSchema);
