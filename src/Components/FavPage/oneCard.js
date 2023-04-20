// @ts-nocheck
import React, { useState,  useRef } from 'react';
import ModelFun from "./Model";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function OneCard(props){
    let [test,setTest]=useState(false);
    let Comment = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleDelete(hId){
        props.delete(hId);
    }

    function updateFav(hId){
        let comment=Comment.current.value;
        setTest(true);
        props.update(hId,comment);
    }
    return(
        <div className="card">
                    <div className='city-card'>
                        <div className='imgdiv'>
                            <img src={`${props.data.photo}`} alt='city' />
                        </div>
                        <div className="houseDetails">
                            <h1 id='status'>{`Status: ${props.data.status}`}</h1>
                            <p><b className='bold'>{`${props.data.price} $`}</b></p>
                            <p className='iconP'><FontAwesomeIcon className='green' icon={faLocationDot} />{` :  ${props.data.address}`}</p>
                            <p className='iconP'><FontAwesomeIcon className='green' icon={faBath} />{`  :  ${props.data.baths} bathrooms`}</p>
                            <p className='iconP'><FontAwesomeIcon className='green' icon={faBed} />{`  :  ${props.data.beds} bedrooms`}</p>
                            <p className='iconP'>{test?"No Comment Yet":props.data.comment}</p>
                            <textarea id='favCom' name='commentA' ref={Comment} placeholder='Enter yout comment' ></textarea>

                            <nav id='hButton'>
                                <Link to={props.data.webUrl}><button className='btn1'>More Info</button></Link>
                                <Link to="/contact"><button className='btn1'>Email Us</button></Link>
                                <button className='btn1' onClick={(e) => handleDelete(props.data.id)} >Delete</button>
                                <button className='btn1' onClick={(e) => updateFav(props.data.id)}>Update Comment</button>
                            </nav>
                        </div>
                    </div>
                    <ModelFun show={show} handleClose={handleClose} movie={props.data} />
                </div>
    )
}