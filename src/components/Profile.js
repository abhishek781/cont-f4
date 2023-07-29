// components/Profile.js
// src/components/Profile.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../store/userActions';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Assuming you have the user ID stored in the Redux state
    const userId = user ? user.id : null;

    if (userId) {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setProfile(data));
        });
    }
  }, [user, dispatch]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user information */}
    </div>
  );
};

export default Profile;
