// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import ModelFun from "./Model";
import "./FavPage.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Header from '../header/header';
import Footer from '../Footer/Footer';




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


  let userid = 25;
async function getFavHouses() {

  let userID = 25
    // let url = `http://localhost:4000/getfav?userID=${userID}`
    let url = `http://localhost:4000/getfav`
    let data =
      {
        userID : userid
      }
    
    let response = await fetch(url, {
      method: 'POST',
      headers: {
                  "Content-Type": "application/json",
                },
      body : JSON.stringify(data)
    })
    let recivedData = await response.json();
    console.log(4444,recivedData)
    setFavHouse(recivedData)
    console.log(6666,favHouse)  
}


const [Houses, setHouses] = useState([]);

async function getHouses() {

  let url = `http://localhost:4000/` 

  let response = await fetch(url, {
    method: 'GET',
    
  })
  
  let recivedData = await response.json();
  setHouses(recivedData)  
  // console.log(7777,Houses)
}




let commentA = useRef()      
const [object, setobject] = useState({});
let array = []

 async function favHouses () {
    favHouse.map((x)=>{

      Houses.map(y=>{
        
        if(x.home_id === y.id ){
          y.comment = commentA.current.value
          setobject = y ;
          array.push(object)
          console.log(5555,array)

      }
      
      })
    })
  }

  
    


  useEffect(() => {
    getFavHouses();
    getHouses();
    favHouses ();
    
    
    
  }, [])
  
  




  return (
    <nav id='favPage'>
      <Header/>
      {array && array.map((element) => (
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
              <textarea id='favCom'  name='commentA' ref={commentA} placeholder='Enter yout comment' ></textarea> 
               
              <nav id='hButton'>
              <Link to={element.webUrl}><button className='btn1'>More Info</button></Link>
              <button className='btn1' onClick={handleShow}>Email Us</button>
              <button className='btn1' onClick={() => handleDelete(element.id)}>Delete</button>
              <button className='btn1' onClick={()=> favHouses ()} >Update Comment</button>
              
              </nav>
            </div>
          </div>
          <ModelFun show={show} handleClose={handleClose} movie={element} />
        </div>
      )
      )
      }
    <Footer/>  
    </nav>
  )
}
