import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      reviewCount {
        _id
        pubName
        review
        score
        price
        location
      }
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query getReviews {
    reviewCount {
      _id
      pubName
      review
      score
      price
      location
    }
  }
`;

export const QUERY_SINGLE_REVIEW = gql`
  query getSingleReview($reviewId: ID!) {
    review(reviewId: $reviewId) {
      pubName
      review
      score
      price
      location
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
        _id
        username
        email
        reviewCount {
          _id
          pubName
          review
          score
          price
          location
        }
      }
    }
  }
`;
