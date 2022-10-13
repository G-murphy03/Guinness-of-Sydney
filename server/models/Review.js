const {Schema} = require('mongoose');

const reviewSchema = new Schema(
    {
        name: {
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
        },
        price: {
            type: Float32Array,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    }
);

module.exports = reviewSchema;