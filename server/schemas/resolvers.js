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
    
    me: async (parent, arg, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  
  Mutations: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
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
    addReview: async (parent, { Review }, context) => {
      if (context.user) {
        const review = await Review.create({
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

        return review;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  removeReview: async (parent, { reviewId }) => {
    return Review.findOneAndDelete({ _id: reviewId });
  },
};

module.exports = resolvers;