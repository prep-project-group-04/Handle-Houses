// @ts-nocheck
import "./LogIn.css";
import {Link} from 'react-router-dom'

export default function LogIn() {
    return (
        <div className="login">
                
                <form id="login-form">
                <h1>Login</h1>
                    <label for="Email">Email:</label>
                    <input type="text" id="Email" name="Email" required />
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit" id="login-btn">Login</button>
                    <h5>forget password? <a href="/forgot-password">Reset</a></h5>
                    <h5>you don't have an account! <Link to="/signUp">Sign Up</Link></h5>
                </form>
                <div id="login-error" className="error-msg"></div>
        </div>
    )
}