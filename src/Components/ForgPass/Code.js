// @ts-nocheck
// @ts-ignore
import { Link } from 'react-router-dom';
// to redirect to the login page after updating the password.
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { useRef } from "react";
import { useState } from 'react';
import "./ForgPass.css";

export default function ForgetPass() {
    const emailCode = useRef();
    const token = useRef();
    const navigate = useNavigate();

    // email
    const [email, setEmail] = useState('');
    const [pop, setPop] = useState("none");
    const [response, setResponse] = useState(null);
    const [mode, setToken] = useState("none");

    // token
    const [code, setCode] = useState('');

    // password verification
    const firstPass = useRef();
    const secPass = useRef();
    const [firstPassword, setFirstPassword] = useState('');
    const [secPassword, setSecPassword] = useState("");

    async function postData() {
        // take the email to check if it exists and receive a token
        setEmail(emailCode.current.value);
        let url = `${process.env.REACT_APP_SERVER_URL}/restPassword`;
        let data = {
            email: email,
        };
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();// parse response data as JSON
        console.log(response)
        console.log(responseData);
        setResponse(responseData);
        
        
        if (response.status === 201) {
            setToken("inline");
        }
    }

    //check if the token correct
    function passwordAuth(event) {
        event.preventDefault();
        setCode(token.current.value);
        if (response === code) {
            setPop("inline");
        }
    }

    // add the new password to the DB then go to Login Page
    const handleSubmit = async (event) => {
        event.preventDefault();
        setFirstPassword(firstPass.current.value);
        setSecPassword(secPass.current.value);

        if (firstPassword !== secPassword) {
            alert("Passwords do not match")
        } else {
            try {
                let url = `${process.env.REACT_APP_SERVER_URL}/updatePass`;
                let data = {
                    email: email,
                    newPass: secPassword
                };

                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                if (response.status === 201) {
                    navigate("/login"); // to redirect to the login page after updating the password.
                }
            } catch (error) {
                console.error(error);
            }
        }
    };



    // console.log(response);
    return (
        <>
            <div className="body">
                <form action="" method="post">
                    <h1>Forget Password</h1>
                    <div className='iconEmail'>
                        <input type="email" id="email" name="email" placeholder="Please enter your Email" ref={emailCode}
                            required />
                    </div>
                    <button style={{ marginBottom: "5%" }} type="submit" onClick={(e) => { postData(e) }}>Recover</button>
                    <div style={{ display: mode, marginTop: "7%" }}>
                        <div className='iconEmail'>
                            <input type="text" id="email" name="text" placeholder="Please enter the Code" ref={token} required/>
                        </div>
                        <button type="submit" onClick={(e) => { passwordAuth(e) }}>Recover</button>
                    </div>
                    <Link className='link' to="/">Go Back</Link>
                </form>
            </div>
            <div className="ppopp">
                <form action="" method="post">
                    <h1>Forget Password</h1>
                    <div className='iconEmail'>
                        <input type="password" id="email" placeholder="Please Enter your Password" ref={firstPass}
                            required />
                    </div>
                    <div className='iconEmail'>
                        <input type="password" id="email" placeholder="Please Conform your Password" ref={secPass}
                            required />
                    </div>
                    <button type="submit" onClick={(e) => { handleSubmit(e) }}>Recover</button>
                    <Link className='link' to="/">Go Back</Link>
                </form>
            </div>

        </>
    );
}
