const {Schema} = require('mongoose');

const reviewSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        review: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    }
);

module.exports = reviewSchema;