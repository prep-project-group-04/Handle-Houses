// @ts-ignore
import {Link,redirect} from 'react-router-dom';
// @ts-ignore
import { useRef } from "react";
import { useState } from 'react';
import "./ForgPass.css";




export default function TokenFun(props) {
    const token = useRef();

    const [code, setCode] = useState([]);
    const [rest, setRest] = useState(false);

    
    function passwardAthunt(event) {
        event.preventDefault();
        setCode(token.current.value);
        setRest(true);


        if (props.code === code){
          setRest(true);
        }
    }

    if (rest) {
      redirect(`/reset-password`);
    }

  return (
    <>
      <div className="body">
        <form action="" method="post">
          <h1>Enter The Code Please</h1>
          <div className='iconEmail'>
            <input type="text" id="email" name="text" placeholder="Please enter the Code" ref={token}  required />
          </div>
          <Link to="/reset-password">
          <button type="submit" onClick={(e) => { passwardAthunt(e) }}>Recover</button>
          </Link>
          <Link className='link' to="/">Go Back</Link>
        </form>
      </div>
    </>
  );
}
