const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    reviewCount: [Review]
  }
  type Review {
    _id: ID!
    pubName: String!
    review: String!
    score: Int!
    price: Float!
    location: String!
  }
  type Auth {
    token: ID!
    user: [User]
  }
  type Query {
    users: [User]
    user(username: String!): User
    review(username: String): [Review]
    review(reviewId: ID!): Review
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addReview(pubName: String!, review: String!, score: Int!, price: Float!, location: String!): Review
    updateReview(pubName: String!, review: String!, score: Int!, price: Float!, location: String!): Review
    removeReview(reviewId: ID!): Review
  }
`;
