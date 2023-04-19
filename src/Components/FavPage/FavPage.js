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
  
async function getFavHouses() {

    let url = `http://localhost:3003/getfav`

    let response = await fetch(url, {
      method: 'GET',
    })

    let recivedData = await response.json();
    setFavHouse(recivedData)
}



  //  let comment = useRef()      

//   async function handleUpdate (userid,homeid){
//     let url =`http://localhost:3003/getfav`;

//     let response = await fetch(url,{

//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(
//             {
//             comment : comment,
//             Home_id : homeid,
//             user_id : userid
//             }
//         )
        
//   })
    
// }



  useEffect(() => {
    getFavHouses();
    console.log(favHouse)

  }, [])





  return (
    <nav id='favPage'>
      <Header/>
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
              <textarea id='favCom'  name='comment' placeholder='Enter yout comment' ></textarea> 
               {/* ref={comment} */}
              <nav id='hButton'>
              <Link to={element.webUrl}><button className='btn1'>More Info</button></Link>
              <button className='btn1' onClick={handleShow}>Email Us</button>
              <button className='btn1' onClick={() => handleDelete(element.id)}>Delete</button>
              <button className='btn1' >Update Comment</button>
              {/* onClick={()=>handleUpdate(element.id)} */}
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
