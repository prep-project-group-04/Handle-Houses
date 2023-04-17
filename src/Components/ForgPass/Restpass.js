import React, { useState } from "react";
import {  Link } from "react-router-dom";
// import { Redirect } from 'react-router';
// @ts-ignore
import { redirect } from "react-router-dom";

// @ts-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// @ts-ignore
import { faLock } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import axios from "axios";
import "./ForgPass.css";

export default function PasswordReset(props) {
  const [rest, setRest] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
        //??????????
      const response = await axios.post("url/password-reset", { password });
      setRest(true);
    } catch (error) {
      alert("Failed to reset password");
    }
  };

  if (rest) {
    redirect("/login");
  }
  
  return (
    
      <div className="body">
        <form action="" method="post">
          <h1>Forget Password</h1>
          <div className='iconEmail'>
            <span><FontAwesomeIcon icon={faLock} /></span>
            <input type="password" id="email1"  placeholder="Please Enter your Password" value={password}
            onChange={(event) => setPassword(event.target.value)} required />
          </div>
          <div className='iconEmail'>
            <span><FontAwesomeIcon icon={faLock} /></span>
            <input type="password" id="email1" placeholder="Please Conform your Password"  value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)} required />
          </div>
          <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Recover</button>
          <Link className='link' to="/">Login</Link>
        </form>
      </div>
    
  );
}