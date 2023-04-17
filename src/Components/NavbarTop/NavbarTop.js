// @ts-nocheck
import React, { useState } from 'react';
import './NavbarTop.css';
import { Link } from 'react-router-dom';

function NavbarTop() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    // const [profilePicture, setProfilePicture] = useState('');

    const handleSignIn = () => {
        setIsSignedIn(true);
    };
    // const handleSignOut = () => {
    //     setIsSignedIn(false);
    //     setProfilePicture('');
    // };

    return (
        <nav className='NavbarTop'>
            <Link to="/home">Home</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/favouriteList">Favourite List</Link>
            <Link to="/contact">Contact</Link>
            <div className="button-container">
                {
                   isSignedIn? <Link to="/personalProfile" ><i class="fa-solid fa-user"></i></Link>:
                   <Link to='login' onClick={handleSignIn}>Login</Link>
                }
            </div>
        </nav>
    );
}

export default NavbarTop;
