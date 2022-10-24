import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Viewing all reviews...</h2>
      {reviews &&
        reviews.map((review) => (
          <CardGroup key={review._id}>
            <Card.Body className='card mb-3'>
              <Card.Title className='pub-name' bg='dark'>
                Pub Name: {review.pubName}
              </Card.Title>
              <Card.Title className='pub-reviewer' bg='dark'>
                Reviewer: {review.reviewer}
              </Card.Title>
              <Card.Text className='pub-review' bg='dark'>
                Review: {review.review}
              </Card.Text>
              <Card.Text className='pub-score' bg='dark'>
                Score: {review.score}
              </Card.Text>
              <Card.Text className='pub-price' bg='dark'>
                Price: {review.price}
              </Card.Text>
              <Card.Text className='pub-location' bg='dark'>
                Location: {review.location}
              </Card.Text>
            </Card.Body>
          </CardGroup>
        ))}
    </div>
  );
};

export default Reviews;
