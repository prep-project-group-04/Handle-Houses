// @ts-nocheck
import "./SignUp.css"
import { useRef } from 'react';
import  {useEffect, useState } from 'react';
import { Redirect } from "react-router";
import { redirect } from "react-router-dom";



export default function SignUp(props) {
    const [Confirm, setConfirmPassword] = useState(true);
    
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordref=useRef();

    function SignUptHandler(e) {
        e.preventDefault()
        let userName = usernameRef.current.value;
        let userEmail = emailRef.current.value;
        let userPassword = passwordRef.current.value;
        let ConfirmPassword =ConfirmPasswordref.current.value;


      // let newUserData = { userName, userEmail, userPassword }

      //  console.log(newUserData);
        //props.commentHandler(newMoveData,newMoveData.id)
        if (ConfirmPassword === userPassword){
            addUsersHandler(e,userName, userEmail, userPassword)
        }
        else {
            setConfirmPassword(false);
           // updateConfirmPassword(Confirm);
        }
    }
    
//    function updateConfirmPassword(Confirm){
       

//     }
        
    
    
     async function addUsersHandler (userName, userEmail, userPassword){
        
        let url=`http://localhost:3000/addUsers`
    
            let data={
                fullName:userName,
                Email:userEmail,
                password:userPassword,
            }
            const response = await fetch(url, {
                method: "POST",
               
                headers: {
                  "Content-Type": "application/json"},
                  body: JSON.stringify(data), 
                })  
                const reseveData= await response.json();
    // console.log(reseveData)
    if(response.status===201){return redirect("/LogIn");}

        }

        useEffect(() => {
            setConfirmPassword(true);
          },[]);
    return (
        <div className="body">
            <form action="" method="post">
                <h1>Sign Up</h1>
                <input ref={usernameRef} type="text" id="username" name="username" placeholder="Username" required />
                <input ref={emailRef} type="email" id="email" name="email" placeholder="Email" required />
                <input  ref={passwordRef} type="password" id="password" name="password" placeholder="Password" required />
             { Confirm? <input ref={ConfirmPasswordref} type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />:<input ref={ConfirmPasswordref} type="password" onfocus="this.value=''" id="confirm-password" name="confirm-password" placeholder=" Rewrite Confirm Password" required style={{ backgroundColor:'hsl(0, 43%, 69%)'}} />}
                <button variant="primary" type="submit" onClick={(e) => SignUptHandler(e)} >
                    Sign Up
                </button>
            </form>
        </div>
    )
}
