// @ts-nocheck
import "./LogIn.css";
import { Link } from 'react-router-dom'

export default function LogIn() {
    return (
        <div className="login">
            
            <form id="login-form">
                <h1>Login</h1>
                <input type="text" id="Email" name="Email" placeholder="Email" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button type="submit" name="login" id="login-btn">Login</button>
                <h6>forget password? <Link to="/forgot-password">Reset</Link></h6>
                <hr/>
                <h5>you don't have an account! <Link to="/signUp">Sign Up</Link></h5>
            </form>
            <div id="login-error" className="error-msg"></div>
        </div>
    )
}