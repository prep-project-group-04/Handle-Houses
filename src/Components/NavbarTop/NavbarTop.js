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
            <Link href="/">Home</Link>
            <Link href="/favouriteList">About Us</Link>
            <Link href="/favouriteList">Favourite List</Link>
            <Link href="/contact">Contact</Link>
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
