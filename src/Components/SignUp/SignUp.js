// @ts-nocheck
import "./SignUp.css"
import { useRef } from 'react';
import  { useState } from 'react';
import {redirect} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';








export default function SignUp() {

    const [Confirm, setConfirmPassword] = useState(true);
    const [userName, setuserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [ConfirmPassword, setConfirmPasswordnew] = useState("");
    const [rest, setRest] = useState(false);
    const [rest1, setRest1] = useState(false);
    const [rest2, setRest2] = useState(false);
    const [rest3, setRest3] = useState(false);
    const [rest4, setRest4] = useState(false);






    // const [rest, setRest] = useState(false);

    const navigate = useNavigate();

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordref=useRef();

    function SignUptHandler(e) {
        e.preventDefault()
       setuserName(usernameRef.current.value); 
        setuserEmail(emailRef.current.value) ;
        setuserPassword(passwordRef.current.value) ;
        setConfirmPasswordnew(ConfirmPasswordref.current.value) ;

        if (ConfirmPassword === userPassword){
            addUsersHandler(userName, userEmail, userPassword)
        }
        else {
            setConfirmPassword(false);
        }
    }
    

        
    
    
     async function addUsersHandler (userName, userEmail, userPassword){
        
        let url=process.env.REACT_APP_SERVER_URL
    
            let data={
                fullName:userName,
                email:userEmail,
                password:userPassword
            }
            const response = await fetch(`${url}/addUser`, {
                method: "POST",
               
                headers: {
                  "Content-Type": "application/json"},
                  body: JSON.stringify(data)
                })  
                const reseveData= await response.json();
                if (response.status===201){
                    redirect(`./LogIn`);
                }
                console.log(reseveData)
                if(rest){
                    navigate('/LogIn');
                }
                if(response.status===400){
                    setRest1(true);
                }
                else if(response.status===401){
                    setRest2(true);
                }
                else if(response.status===402){
                    setRest3(true);
                }
                else if(response.status===403){
                    alert("heloo")
                    setRest4(true);
                }
                
                
                
              
               


        }
        // if(rest){ redirect(`/login`);}
        if (rest) {
            
          }

        // useEffect(() => {
        //     setConfirmPassword(true);
        //   },[]);
    return (
        <div className="body">
            <form action="" method="post">
                <h1>Sign Up</h1>
                { rest1? <p>Full name is too long. Maximum length is 25 characters</p>:<p></p>}
                <input ref={usernameRef} type="text" id="username" name="username" placeholder="Username" required />
                { rest2? <p>Email is too long. Maximum length is 50 characters</p>:<p></p>}
                { rest4? <p>Invalid email format</p>:<p></p>}
                <input ref={emailRef} type="email" id="email" name="email" placeholder="Email" required />
                { rest3? <p>Password length must be between 8 and 25 characters</p>:<p></p>}
                <input  ref={passwordRef} type="password" id="password" name="password" placeholder="Password" required />
             { Confirm? <input ref={ConfirmPasswordref} type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />:<input ref={ConfirmPasswordref} type="password" id="confirm-password" name="confirm-password" placeholder=" Rewrite Confirm Password" required style={{ backgroundColor:'hsl(0, 43%, 69%)'}} />}
                <button variant="primary" type="submit" onClick={(e) => SignUptHandler(e)} >
                    Sign Up
                </button>
            </form>
        </div>
    )
}
