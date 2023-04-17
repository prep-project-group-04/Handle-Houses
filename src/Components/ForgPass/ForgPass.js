import {Link} from 'react-router-dom';
// @ts-ignore
// import axios from 'axios';
import { useState } from 'react';
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./ForgPass.css";



export default function ForgetPass() {
    const [email, setEmail] = useState('');
    
    async function checkEmail(){
       
    }
    
    
    function passwardAthunt(event) {
        // event.preventDefault();
        // axios.post('url/forget', { email }).then().catch();
    }

  return (
    <>
      <div className="body">
        <form action="" method="post">
          <h1>Forget Password</h1>
          <div className='iconEmail'>
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <input type="email" id="email1" name="email" placeholder="Please enter your Email" value={email}
              onChange={(event) => setEmail(event.target.value)}  required />
          </div>
          <Link to="/reset-password">
          <button type="submit" onClick={(e) => { passwardAthunt(e) }}>Recover</button>
          </Link>
          <Link className='link' to="/">Login</Link>
        </form>
      </div>
    </>
  );
}
