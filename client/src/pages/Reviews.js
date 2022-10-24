import React from 'react';
import ReviewList from '../components/ReviewList';
import { useQuery} from '@apollo/client';
import {QUERY_REVIEWS} from '../utils/queries';

const Reviews = () => {
    const {loading, data} = useQuery(QUERY_REVIEWS);
    const reviews = data?.reviews || [];

    return (
        <main>
            <div className='reviews-page'>
                {
                    loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ReviewList
                        reviews={reviews}
                        />
                    )
                }
            </div>
        </main>
    )
};

export default Reviews;