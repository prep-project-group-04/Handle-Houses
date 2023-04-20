// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import NavbarTop from '../NavbarTop/NavbarTop';
import dummyProfilePic from '../../assets/dummyProfilePic2.jpg'
function Profile() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  let id = localStorage.getItem("id");
  id = JSON.parse(id);

  async function getInfo() {
    let url = process.env.REACT_APP_SERVER_URL;
    let data = {
      id: id
    }
    const response = await fetch(`${url}/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const reseveData = await response.json();
    console.log(reseveData)
  }


  useEffect(() => {
    getInfo()
  }, []);

  if (!isSignedIn) {
    return (
      <div className="not-signed-in">
        <div>
          <h2>You are not signed in</h2>
          <Link to="/login">
            <button className="login-button">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button">Don't have an account? Sign up</button>
          </Link>
        </div>
      </div>
    );
  }

  else {
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

      </div>
    )
  }
}

export default Profile;
