const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    profileImgUrl: {
      type: String,
      required: true,
    },
    postContent: {
      type: String,
      required: true,
    },
    likes: [
      {
        username: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    comments: [
      {
        username: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    share: [
      {
        username: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const post = mongoose.model("post", postSchema);

module.exports = post;
