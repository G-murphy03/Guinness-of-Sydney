import React from 'react';
import Card from 'react-bootstrap/Card';

const Reviews = ({
    reviews,
}) => {
    if (!reviews.length) {
        return <h3>No reviews yet!</h3>;
    }
    return (
        <div>
            <h2>Viewing all reviews...</h2>
            {reviews && reviews.map((review) => (
                <Card style={{width: '18rem'}}>
                    <Card.Img src />
                    <Card.Body>
                        <Card.Title className='pub-name'>{review.pubName}</Card.Title>
                        <Card.Title className='pub-reviewer'>{review.reviewer}</Card.Title>
                        <Card.Text className='pub-review'>{review.review}</Card.Text>
                        <Card.Text className='pub-score'>{review.score}</Card.Text>
                        <Card.Text className='pub-price'>{review.price}</Card.Text>
                        <Card.Text className='pub-location'>{review.location}</Card.Text>
                    </Card.Body>
                </Card>
            ))
            }
        </div>
    )
};

export default Reviews;