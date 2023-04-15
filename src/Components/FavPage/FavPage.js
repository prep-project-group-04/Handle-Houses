// @ts-nocheck
import React, { useState, useEffect } from 'react';
import ModelFun from "./Model";
import "./FavPage.css"
import { Link } from "react-router-dom";
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

  return (
    <>
      {favCity && DB.map((element) => (
        <div className="card">
          <div className='city-card'>
            <div className='imgdiv'>
              <img className='img-cards' src={`${element.photo}`} alt='city' />
            </div>
            <div className='body-card'>
              <h1>{`Address : ${element.address}`}</h1>
              <p>{`Status : ${element.status}`}</p>
              <p><b className='bold'>{`${element.price} $`}</b></p>
              <p>{`Number of Beds : ${element.beds}`}</p>
              <p>{`Number of Baths : ${element.baths}`}</p>
              <button className='btn1' onClick={() => handleDelete(element.id)}>Delete</button>
              <button className='btn1' onClick={handleShow}>Email Us</button>
            </div>
          </div>
          <ModelFun show={show} handleClose={handleClose} movie={element} />
        </div>
      )
      )
      }
    </>
  );
}
