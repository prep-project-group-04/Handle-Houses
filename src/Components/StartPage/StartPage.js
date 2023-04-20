// @ts-nocheck
import { Link } from 'react-router-dom';
import './StartPage.css';
import backgroundVideo from '../../assets/backgroundVideo.mp4';

export default function StartPage() {
    if(localStorage.getItem("id")){
        localStorage.removeItem("id");
    }
    return (
        <div className="start-page">
            <video autoPlay loop muted className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="content">
                <h1>Find Your Dream Home</h1>
                <p>Search, filter, and find houses by city and price range. Save your favorites and make your purchase.</p>
                <Link to="/Login">
                    <button className="signin-button">LogIn</button>
                </Link>
            </div>
        </div>
    );
}
