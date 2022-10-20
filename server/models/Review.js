const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
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
  reviewer: {
    type: String,
    required: true,
  }
});

const Review = model('Review', reviewSchema);

module.exports = Review;
