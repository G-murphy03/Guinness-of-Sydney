const { Schema } = require('mongoose');

const reviewSchema = new Schema({
  reviewId: {
    type: String,
    required: true,
  },
  pubName: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = reviewSchema;
