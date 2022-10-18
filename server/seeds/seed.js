const db = require('../config/connection');
const { Review } = require('../models');
const reviewData = require('./reviewSeeds.json');

db.once('open', async() => {
    try {
        await Review.deleteMany({});
        await Review.create(reviewData);

        console.log('Reviews seeded!');
        process.exit(0);
    } catch(err) {
        throw err;
    }
});