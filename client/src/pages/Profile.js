import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_REVIEW } from '../utils/mutations';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to='/profile' />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const [removeReview, { loading: deleting, error: deleteError }] = useMutation(REMOVE_REVIEW);

  return (
    <div>
      <div className='flex-row justify-center mb-3'>
        <h2 className='col-12 col-md-10 bg-dark text-light p-3 mb-5'>
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className='col-12 col-md-10 mb-5'>
          <ReviewList
            review={user.review.pubName}
            title={`${user.username}'s reviews...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className='col-12 col-md-10 mb-3 p-3'
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <ReviewForm />
          </div>
        )}
      </div>
    </div>
  );
}


export default Profile;
