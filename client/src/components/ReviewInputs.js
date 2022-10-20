import React from 'react';

const ReviewInputs = () => {
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

export default ReviewInputs;
