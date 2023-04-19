// // @ts-nocheck
// import React, { useState } from "react";
// import {  Link } from "react-router-dom";
// import { redirect } from "react-router-dom";
// import { useRef } from "react";
// import "./ForgPass.css";

// export default function PasswordReset() {
//   const firstPass = useRef();
//   const secPass = useRef();
//   const [firstPassword, setFirstPassword] = useState('');
//   const [rest, setRest] = useState(false);
//   const [secPassword, setSecPassword] = useState("");
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setFirstPassword(firstPass.current.value);
//     setSecPassword(secPass.current.value);
//     console.log(secPassword);
//     console.log(firstPassword);

  
//     if (firstPass !== secPass) {
//       alert("Passwords do not match")
//     }else{
//       const fainalPass = secPassword;
//       return fainalPass;
//     }

//     try {

//       let url = `/updatePass`;
//       let data = {
//         email:"",
//         newPass:firstPass
//       };

//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       console.log(response);
//         setRest(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   if (rest) {
//     redirect("/login");
//   }
  
//   return (
    
//       <div className="body">
//         <form action="" method="post">
//           <h1>Forget Password</h1>
//           <div className='iconEmail'>
//             <input type="password" id="email"  placeholder="Please Enter your Password" ref={firstPass}
//              required />
//           </div>
//           <div className='iconEmail'>
//             <input type="password" id="email" placeholder="Please Conform your Password" ref={secPass}
//             required />
//           </div>
//           <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Recover</button>
//           <Link className='link' to="/">Go Back</Link>
//         </form>
//       </div>
    
//   );
// }