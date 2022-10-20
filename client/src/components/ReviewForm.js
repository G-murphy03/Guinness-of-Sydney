import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const ReviewForm = () => {
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
          pubName,
          review,
          score,
          price,
          location
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='reviewInput'>
      <h2> Add a Review</h2>
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
