// @ts-nocheck
import React, { useState } from 'react';
import './NavbarTop.css';
import { Link } from 'react-router-dom';

function NavbarTop() {
    const [mode, setMode] = useState("0%");
    function Nav() {
        if (mode === '0%') {
            setMode("100%")
        }
        else {
            setMode('0%')
        }
    }
    return (
        <>
            <nav className='NavbarTop'>
                <Link to="/home" className='lab'>Home</Link>
                <Link to="/AboutUs" className='lab'>About Us</Link>
                <Link to="/favouriteList" className='lab'>Favourite List</Link>
                <Link to="/contact" className='lab'>Contact</Link>
                <div className="button-container lab">
                    <Link to="/personalProfile"><i class="fa-solid fa-user"></i></Link>
                </div>
                <div id="nav2" onClick={Nav}>
                    <i className="fa-solid fa-list"></i>
                    <Link to="/personalProfile"><i class="fa-solid fa-user"></i></Link>
                </div>
            </nav>
            <div id="mopileNav" style={{ width: mode }}>
                <div id="nav22" onClick={Nav}>
                    <i className="fa-solid fa-list"></i>
                </div>
                <Link to="/home">Home</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/favouriteList">Favourite List</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </>
    );

}

export default NavbarTop;
