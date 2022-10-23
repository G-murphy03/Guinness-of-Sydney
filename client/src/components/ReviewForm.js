import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_REVIEW } from '../utils/mutations';
import { QUERY_REVIEWS, QUERY_ME } from '../utils/queries';
import {Link} from 'react-router-dom';

import Auth from '../utils/auth';

const ReviewForm = () => {
  const [formState, setFormState] = useState({
    pubName: '',
    review: '',
    score: '',
    price: '',
    location: '',
  })
  // const [pubName, setPubName] = useState('');
  // const [review, setReview] = useState('');
  // const [score, setScore] = useState('');
  // const [price, setPrice] = useState('');
  // const [location, setLocation] = useState('');

  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });

        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addReview, ...reviews] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, reviews: [...me.reviews, addReview] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addReview({
        variables: {
          ...formState,
          reviewer: Auth.getProfile().data.username,
        },
      });

      // setPubName('');
      // setReview('');
      // setScore('');
      // setPrice('');
      // setLocation('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='reviewInput'>
      <h2> Add a Review</h2>
      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
            <textarea
                name="pubName"
                placeholder="Pub Name:"
                value={formState.pubName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            <textarea
                name="review"
                placeholder="Review:"
                value={formState.review}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="review"
                placeholder="Score (out of 10):"
                value={formState.score}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="review"
                placeholder="Price:"
                value={formState.price}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="review"
                placeholder="Location:"
                value={formState.location}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Submit Review
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
        You need to be logged in to submit a review. Please{' '}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ReviewForm;
