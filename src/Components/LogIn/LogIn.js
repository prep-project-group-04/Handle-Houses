// @ts-nocheck
import "./LogIn.css";
import { Link } from 'react-router-dom'
import { useRef } from "react";
import { useState } from "react";

export default function LogIn() {
    const email=useRef();
    const password=useRef();
    const [check1,setCheck1]=useState('Email');
    const [check2,setCheck2]=useState("Password");
    async function loginAther(e){
        e.preventDefault();
        let Email=email.current.value;
        let Password=password.current.value;
        if(Email.length===0){
            setCheck1("Please Enter Email");
        }
        else if(Password.length===0){
            setCheck2("Please Enter Passwrod");
        }
        else if(Email.length===0 && Password.length===0){
            setCheck1("Please Enter Email");
            setCheck2("Please Enter Passwrod");
        }
        else{
            let url=`${process.env.REACT_APP_SERVER_URL}/loginAuthanication`;
            let data ={
                email:Email, 
                password:Password
            };
            const response= await fetch(url,{
                method:'POST',
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(data),
            });
            const receveData= await response.json();
            if(response.status===201){
                console.log(receveData);
            }
            else if(response.status===500){
                console.log("rongPass ",receveData);
            }
            else if(response.status===505){
                console.log('rong password ',receveData);
            }
            else if(response.status===501){
                console.log("no account ",receveData);
            }
            else if(response.status===502){
                console.log("try other way haker ",receveData);
            }
        }
    }

    return (
        <div className="login">
            
            <form id="login-form">
                <h1>Login</h1>
                <input type="text" ref={email} id="Email" name="Email" placeholder="Email" required />
                <input type="password" ref={password} id="password" name="password" placeholder="Password" required />
                <button type="submit" onClick={(e)=>{loginAther(e)}} name="login" id="login-btn">Login</button>
                <h6>forget password? <Link to="/forgot-password">Reset</Link></h6>
                <hr/>
                <h5>you don't have an account! <Link to="/signUp">Sign Up</Link></h5>
            </form>
            <div id="login-error" className="error-msg"></div>
        </div>
        
    )
}