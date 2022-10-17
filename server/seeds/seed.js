const db = require('../config/connection');
const { Review } = require('../models');

const reviewData = require('./reviewSeeds.json');

db.once('open', async() => {
    await Review.deleteMany({});
    const reviews = await Review.insertMany(reviewData);

    console.log('Reviews seeded!');
    process.exit(0);
});