const { User, Review } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, arg, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user.id }).select(
          '-__v -passord'
        );
        return user;
      }
    },
    pub: async (parent, { name }) => {
      return await Review.find();
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
      const user = checkAuth(context);

      const newReview = new Review();

      return newReview;
    },
    removeReview: async (parent, { bookId }, context) => {},
  },
};
