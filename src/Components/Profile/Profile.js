// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import NavbarTop from '../NavbarTop/NavbarTop';
import dummyProfilePic from '../../assets/dummyProfilePic2.jpg'

function Profile() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    setIsSignedIn(true);
    if (isSignedIn) {
      setUserData({
        fullName: 'Almothana Almasri',
        Email: 'gggggggggggggggggg@gmail.com',
        City: 'Amman',
      });
      setUserComments([
        { comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.' },
        { comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu' },
        { comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m' },
      ]);
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    return (
      <div className="not-signed-in">
        <NavbarTop />
        <h2>You are not signed in</h2>
        <Link to="/login">
          <button className="login-button">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="signup-button">Don't have an account? Sign up</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <NavbarTop />
      {userData && (
        <>
          <h2>User Profile</h2>
          <div className="profile-info">
            <div className="user-details">
              <h3>{userData.fullName}</h3>
              <p>Email: {userData.Email}</p>
              <p>City: {userData.City}</p>
              <div className="profile-buttons">
                <button className="edit-profile-button">Edit Profile</button>
                <button className="change-password-button">Change Password</button>
              </div>
            </div>
            <img
              className="profile-pic"
              src={dummyProfilePic}
              alt="User profile"
            />
          </div>
        </>
      )}
      <h2>User Comments</h2>
      <ul className="comment-list">
        {userComments.map((comment, index) => (
          <li key={index}>
            <strong>Comment {index + 1}:</strong> {comment.comment}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Profile;
