// @ts-nocheck
import React, { useState } from 'react';
import './NavbarTop.css';
import { Link } from 'react-router-dom';
import List from '../../assets/ee.png'

function NavbarTop() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    // const [profilePicture, setProfilePicture] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleSignIn = () => {
        setIsSignedIn(true);
    };
    // const handleSignOut = () => {
    //     setIsSignedIn(false);
    //     setProfilePicture('');
    // };

    return (
        <nav className='NavbarTop'>
            <img
                src={List}
                alt="Menu"
                onClick={toggleMenu}
                className="menu-image"
            />
            <div className={`nav-links ${showMenu ? 'shown' : 'hidden'}`}>
                <Link to="../Home">Home</Link>
                <Link to ="../AboutUs">About Us</Link>
                <Link to ="../FavPage">Favourite List</Link>
                <Link to="../ContactUs">Contact</Link>
                <div className="button-container">
                    {
                        isSignedIn ? <Link to="/personalProfile"><i class="fa-solid fa-user"></i></Link> :
                            <Link to='/login' onClick={handleSignIn}>Login</Link>
                    }
                </div>
            </div>
        </nav>
    );

}

export default NavbarTop;
