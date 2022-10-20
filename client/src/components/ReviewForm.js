import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_ME } from '../utils/queries';

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
    if (name === 'pubName') {
      setPubName(value);
    }
    if (name === 'review') {
      setReview(value);
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
                onChange={handleChange}
              ></textarea>
            <textarea
                name="review"
                placeholder="Review:"
                value={review}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </>
      )}
      <form>
        <label>Pub</label>
        <input type='text' required />

        <label>Review:</label>
        <textarea required></textarea>

        <label>Score:</label>
        <input type='text' required />

        <label>Price:</label>
        <input type='text' required />

        <label>Location:</label>
        <input type='text' required />

        <label>Reviewer:</label>
        <input type='text' required />
        <button>Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
