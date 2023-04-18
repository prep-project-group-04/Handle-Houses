// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import ModelFun from "./Model";
import "./FavPage.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'





let DB = require('../../data/Home.json')



export default function FavPage(props) {
  const [favCity, setfavCity] = useState([]);
  const [show, setShow] = useState(false);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDelete(id) {
    const newDB = DB.filter((element) => element.id !== id);
    DB = newDB;
    setfavCity(newDB);
  }


  // const [show2, setShow2] = useState(false);
  // const handleClose2 = () => setShow2(false);
  // const handleShow2 = () => setShow2(true);
  
  
  const [favHouse, setFavHouse] = useState([]);
  
  async function getFavHouses() {

    let url = `http://localhost:3003/getfav`

    let response = await fetch(url, {
      method: 'GET',
    })

    let recivedData = await response.json();
    setFavHouse(recivedData)
  }


  // async function submitHandler(id) {
    //     let myComment = await comment.current.value;
    //     props.update(myComment);
    // }
    
    
 const comment = useRef();
 async function submitHandler(id){
    DB.map(x=>{
      if(DB.id === id){ 
          x.comment = comment.current.value
          
          return x;
      }else{
          return x
      }
  })
    
}    











  useEffect(() => {
    getFavHouses();
    console.log(favHouse)

  }, [])





  return (
    <nav id='favPage'>
      {favCity && DB.map((element) => (
        <div className="card">
          <div className='city-card'>
            <div className='imgdiv'>
              <img src={`${element.photo}`} alt='city' />   
            </div>
            <div className="houseDetails">
              <h1 id='status'>{`Status: ${element.status}`}</h1>
              <p><b className='bold'>{`${element.price} $`}</b></p>
              <p className='iconP'><FontAwesomeIcon className='green' icon={faLocationDot} />{` :  ${element.address}`}</p>
              <p className='iconP'><FontAwesomeIcon className='green' icon={faBath} />{`  :  ${element.baths} bathrooms`}</p>
              <p className='iconP'><FontAwesomeIcon className='green' icon={faBed} />{`  :  ${element.beds} bedrooms`}</p>
              <p className='iconP'>{(element.comment) ? (element.comment) : "No comment Added "}</p>
              <textarea id='favCom' ref={comment} name='comment' placeholder='Enter yout comment' ></textarea>
              <nav id='hButton'>
              <Link to={element.webUrl}><button className='btn1'>More Info</button></Link>
              <button className='btn1' onClick={handleShow}>Email Us</button>
              <button className='btn1' onClick={() => handleDelete(element.id)}>Delete</button>
              <button className='btn1' onClick={()=>submitHandler(element.id)}>Update Comment</button>
              </nav>
            </div>
          </div>
          <ModelFun show={show} handleClose={handleClose} movie={element} />
        </div>
      )
      )
      }
    </nav>
  )
}
