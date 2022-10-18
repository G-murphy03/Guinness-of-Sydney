import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview(pubName: String!, review: String!, score: Int!, price: Float!, location: String!) {
    addReview(pubName: $pubName, review: $review, score: $score, price: $price, location: $location) {
        _id
        pubName
        review
        score
        price
        location
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview(reviewId: ID!) {
    removeReview(reviewId: $ID) {
        _id
        pubName
        review
        score
        price
        location
    }
  }
`;