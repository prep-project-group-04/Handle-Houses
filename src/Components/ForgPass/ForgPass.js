// // @ts-nocheck
// // @ts-ignore
// import {Link,redirect} from 'react-router-dom';
// // @ts-ignore
// import { useRef } from "react";
// import { useState } from 'react';
// import "./ForgPass.css";




// export default function ForgetPass() {
//     const emailCode = useRef();

//     const [emaill, setEmail] = useState('');
//     const [rest, setRest] = useState(false);

//     async function postData(el) {
//       // take the email to check if it exist 
//       if (emailCode.current.value!=="Null"){
//         return setEmail(emailCode.current.value);
//       }
      
//       console.log(emaill);
//       let url = `http://localhost:3010/restPassword`
//       let data = {
//         email:emaill
//       }
      

//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//       })
//       console.log(response);
//       setRest(true);
//     }
    
    
//     if (rest) {
//       redirect(`/TokenCode`);
//     }

//   return (
//     <>
//       <div className="body">
//         <form action="" method="post">
//           <h1>Forget Password</h1>
//           <div className='iconEmail'>
//             <input type="email" id="email" name="email" placeholder="Please enter your Email" ref={emailCode}
//                required />
//           </div>
//           <Link to="/reset-password">
//           <button type="submit" onClick={(e) => { postData(e) }}>Recover</button>
//           </Link>
//           <Link className='link' to="/">Go Back</Link>
//         </form>
//       </div>
//     </>
//   );
// }
