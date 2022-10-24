const { Schema, model } = require('mongoose');

// reviewSchema define the shape of the documents within the collection.
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

// Models are constructors compiled from a schema and pass down the properties and methods to each instance
const Review = model('Review', reviewSchema);

module.exports = Review;
