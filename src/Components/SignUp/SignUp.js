// @ts-nocheck
import "./SignUp.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [confirm, setConfirm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const signUpHandler = async (e) => {
    e.preventDefault();
    const userName = usernameRef.current.value;
    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (userPassword && confirmPassword === userPassword) {
      const response = await addUsersHandler(userName, userEmail, userPassword);
      handleResponse(response);
    } else if (userPassword) {
      setConfirm(false);
    }
  };

  const addUsersHandler = async (userName, userEmail, userPassword) => {
    const url = process.env.REACT_APP_SERVER_URL;
    const data = {
      fullName: userName,
      email: userEmail,
      password: userPassword,
    };

    return await fetch(`${url}/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const handleResponse = async (response) => {
    const receivedData = await response.json();
    console.log(receivedData);

    if (response.status === 201) {
      navigate("/LogIn");
    } else if (response.status === 400) {
      setErrorMessage("Full name is too long. Maximum length is 25 characters");
    } else if (response.status === 401) {
      setErrorMessage("Email is too long. Maximum length is 50 characters");
    } else if (response.status === 402) {
      setErrorMessage("Password length must be between 8 and 25 characters");
    } else if (response.status === 403) {
      setErrorMessage("Invalid email format");
    }
    else if(response.status === 409){
        setErrorMessage("The email already exist");
    }
  };

  return (
    <div className="body">
      <form onSubmit={signUpHandler}>
        <h1>Sign Up</h1>
        {errorMessage && <p className="red">{errorMessage}</p>}
        <input ref={usernameRef} type="text" id="username" name="username" placeholder="Username" required />
        <input ref={emailRef} type="email" id="email" name="email" placeholder="Email" required />
        <input ref={passwordRef} type="password" id="password" name="password" placeholder="Password" required />
        {confirm ? (
          <input
            ref={confirmPasswordRef}
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
            required
          />
        ) : (
          <input
            ref={confirmPasswordRef}
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Rewrite Confirm Password"
            required
            style={{ backgroundColor: "hsl(0, 43%, 69%)" }}
          />
        )}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
