const { User, Review } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { username }) => {
      return User.findOne({ _id: username });
    },

    review: async (parent, { reviewId }) => {
      return Review.findOne({ _id: reviewId });
    },

    reviews: async () => {
      return Review.find();
    },
    
     // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, arg, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addReview: async (parent, { pubName, review, score, price, location }, context) => {
      if (context.user) {
        const beerReview = await Review.create({
          pubName,
          review,
          score,
          price,
          location,
          reviewer: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reviews: review._id } }
        );

        return beerReview;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // Add a third argument to the resolver to access data in our `context`
    updateReview: async (parent, {reviewId, pubName, review, score, price, location, reviewer}, context) => {
        // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
        if (context.user) {
          return Review.findByIdAndUpdate(
            { _id: reviewId },
            { 
              $addToSet: 
              {
              pubName,
              review,
              score,
              price,
              location,
              reviewer: context.user.username,
              }
            },
            {
              new: true,
            }
          );
        };
        // If user attempts to execute this mutation and isn't logged in, throw an error
        throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their reviews and no one else's
    removeReview: async(parent, { reviewId }, context) => {
        if (context.user) {
          const beerReview = await Review.findOneAndDelete({
            _id: reviewId,
            reviewer: context.user.username,
          });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { reviews: review._id } }
        );
        return beerReview;
    };
    throw new AuthenticationError('You need to be logged in!');
  }
  },
};

module.exports = resolvers;
