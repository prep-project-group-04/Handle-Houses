import React, { useState } from 'react';
import './NavbarTop.css';

function NavbarTop() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [profilePicture, setProfilePicture] = useState('');

    const handleSignIn = () => {
        // Link to Sign-in Page
        setIsSignedIn(true);
        setProfilePicture('https://example.com/path/to/profile-picture.jpg');
    };
    const handleSignOut = () => {
        setIsSignedIn(false);
        setProfilePicture('');
    };

    return (
        <nav className='NavbarTop'>
            <a href="/"><img src="Logo.png" alt="Logo" /></a>
            <a href="/favouriteList">Favourite List</a>
            <a href="/contact">Contact</a>
            <div className="button-container">
                {isSignedIn ? (
                    <>
                        <img className='profile-picture' src={profilePicture} alt="User profile" />
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <button onClick={handleSignIn}>Sign In</button>
                        <button className="signup-button">Don't have an account? Sign up</button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default NavbarTop;
