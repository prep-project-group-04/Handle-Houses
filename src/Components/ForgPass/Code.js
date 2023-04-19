// @ts-nocheck
// @ts-ignore
import { Link } from 'react-router-dom';
// to redirect to the login page after updating the password.
import { useHistory  } from "react-router-dom";

// @ts-ignore
import { useRef } from "react";
import { useState } from 'react';
import "./ForgPass.css";

export default function ForgetPass() {
  const emailCode = useRef();
  const token = useRef();
  const history = useHistory();

  // email
  const [email, setEmail] = useState('');
  const [rest, setRest] = useState(false);
  const [response, setResponse] = useState(null);

  // token
  const [code, setCode] = useState('');
  const [rest2, setRest2] = useState(false);

  // password verification
  const firstPass = useRef();
  const secPass = useRef();
  const [firstPassword, setFirstPassword] = useState('');
  const [secPassword, setSecPassword] = useState("");

   async function postData() {
    // take the email to check if it exists and receive a token
    setEmail(emailCode.current.value);

    let url = `http://localhost:3010/restPassword`;
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

    const responseData = await response.json(); // parse response data as JSON
    setResponse(responseData); // update state with response data
    if (responseData) {
      setRest(true);
    }
  }

  //check if the token correct
  function passwordAuth(event) {
    event.preventDefault();
    setCode(token.current.value);
    if (code === response) {
      setRest2(true);
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
        let url = `/updatePass`;
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

        console.log(response);
        history.push("/login"); // to redirect to the login page after updating the password.
      } catch (error) {
        console.error(error);
      }
    }
  };




    return (
        <>
            <div className="body">
                <form action="" method="post">
                    <h1>Forget Password</h1>
                    <div className='iconEmail'>
                        <input type="email" id="email" name="email" placeholder="Please enter your Email" ref={emailCode}
                            required />
                    </div>
                    <Link to="/reset-password">
                        <button type="submit" onClick={(e) => { postData(e) }}>Recover</button>
                    </Link>
                    <Link className='link' to="/">Go Back</Link>
                </form>
            </div>
            {
                rest && (
                    <div className="body">
                        <form action="" method="post">
                            <h1>Enter The Code Please</h1>
                            <div className='iconEmail'>
                                <input type="text" id="email" name="text" placeholder="Please enter the Code" ref={token} required />
                            </div>
                            <Link to="/reset-password">
                                <button type="submit" onClick={(e) => { passwordAuth(e) }}>Recover</button>
                            </Link>
                            <Link className='link' to="/">Go Back</Link>
                        </form>
                    </div>
                )
            }
            {
                rest2 && (
                    <div className="body">
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
                )
            }
        </>
    );
}
