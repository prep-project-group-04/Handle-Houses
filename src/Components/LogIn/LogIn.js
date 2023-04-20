// @ts-nocheck
import "./LogIn.css";
import { Link } from 'react-router-dom'
import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { useState } from "react";

export default function LogIn() {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    const [check1, setCheck1] = useState('');
    const [check2, setCheck2] = useState("");
    const [mode1, setMode1] = useState("none");
    const [mode2, setMode2] = useState("none");
    async function loginAther(e) {
        e.preventDefault();
        let Email = email.current.value;
        let Password = password.current.value;
        if (Email.length === 0 && Password.length === 0) {
            setCheck1("Please Enter Email");
            setCheck2("Please Enter Passwrod");
            setMode1("1.5px solid red");
            setMode2("1.5px solid red");
        }
        else if (Password.length === 0) {
            setCheck2("Please Enter Passwrod");
            setMode2("1.5px solid red");
            setMode1("none");
        }
        else if (Email.length === 0) {
            setCheck1("Please Enter Email");
            setMode1("1.5px solid red");
            setCheck2("none");
        }
        else {
            let url = `${process.env.REACT_APP_SERVER_URL}/loginAuthanication`;
            let data = {
                email: Email,
                password: Password
            };
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const receveData = await response.json();
            if (response.status === 201) {
                let id = JSON.stringify(receveData);
                localStorage.setItem(`id`, id);
                navigate(`/home`);
            }
            else if (response.status === 500) {
                setCheck2("Rong Password");
                setCheck1("");
                setMode2("1.5px solid red");
                setMode1("none");
            }
            else if (response.status === 505) {
                setCheck2("Rong Password");
                setCheck1("");
                setMode2("1.5px solid red");
                setMode1("none");
            }
            else if (response.status === 501) {
                setCheck1("You don't have account");
                setCheck2("");
                setMode1("1.5px solid red");
                setCheck2("none");
            }
            else if (response.status === 502) {
                console.log(receveData);
            }
        }
    }

    return (
        <div className="login">

            <form id="login-form">
                <h1>Login</h1>
                <input type="text" ref={email} style={{ border: mode1 }}
                    id="Email" name="Email" placeholder="Email" required />
                <p className="red">{
                    check1
                }</p>
                <input type="password" style={{ border: mode2 }} ref={password} id="password" name="password" placeholder="Password" required />
                <p className="red">{
                    check2
                }</p>
                <button type="submit" onClick={(e) => { loginAther(e) }} name="login" id="login-btn">Login</button>
                <h6>forget password? <Link to="/forgot-password">Reset</Link></h6>
                <hr />
                <h5>you don't have an account! <Link to="/signUp">Sign Up</Link></h5>
            </form>
            <div id="login-error" className="error-msg"></div>
        </div>

    )
}