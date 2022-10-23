import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_REVIEW } from '../utils/mutations';
import { QUERY_REVIEWS, QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const ReviewForm = () => {
  // const [formState, setFormState] = useState({
  //   pubName: '',
  //   review: '',
  //   score: '',
  //   price: '',
  //   location: '',
  // })
  const [pubName, setPubName] = useState('');
  const [review, setReview] = useState('');
  const [score, setScore] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

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
          // ...formState,
          pubName,
          review,
          score,
          price,
          location,
          reviewer: Auth.getProfile().data.username,
        },
      });

      setPubName('');
      setReview('');
      setScore('');
      setPrice('');
      setLocation('');
    } catch (err) {
      console.error(err);
    }
  };

  const handlePubNameChange = (event) => {
    const { name, value } = event.target;
    if (name === 'pubName') {
      setPubName(value);
    }
    // setFormState({
    //   ...formState,
    //   [name]: value,
    // });
  };

  const handleReviewChange = (event) => {
    const { name, value } = event.target;
    if (name === 'review') {
      setReview(value);
    }
  };

  const handleScoreChange = (event) => {
    const { name, value } = event.target;
    if (name === 'score') {
      setScore(value);
    }
  };
  
  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    if (name === 'price') {
      setPrice(value);
    }
  };

  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    if (name === 'location') {
      setLocation(value);
    }
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
                value={pubName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handlePubNameChange}
              ></textarea>
            <textarea
                name="review"
                placeholder="Review:"
                value={review}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleReviewChange}
              ></textarea>
              <textarea
                name="score"
                placeholder="Score (out of 10):"
                value={score}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleScoreChange}
              ></textarea>
              <textarea
                name="price"
                placeholder="Price:"
                value={price}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handlePriceChange}
              ></textarea>
              <textarea
                name="location"
                placeholder="Location:"
                value={location}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleLocationChange}
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