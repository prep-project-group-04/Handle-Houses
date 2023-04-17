// @ts-nocheck
import React, { useState } from 'react';
import ModelFun from "./Model";
import "./FavPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
let DB = require('../../data/Home.json');
export default function FavPage(props) {
  const [favCity, setfavCity] = useState([]);
  const [show, setShow] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleAddComment = () => {
    if (newComment) {
      setComments([...comments, newComment]); // Add new comment
      setNewComment(""); // Clear new comment state after adding
    }
  };
  const handleShowCommentInput = () => {
    setShowCommentInput(true); // Show comment input textarea
  };
  function handleDelete(id) {
    const newDB = DB.filter((element) => element.id !== id);
    DB = newDB;
    setfavCity(newDB);
  }
  return (
    <>
      {favCity && DB.map((element) => (
        <div className="card" key={element.id}>
          <div className='city-card'>
            <div className='imgdiv'>
              <img src={`${element.photo}`} alt='city' />
            </div>
            <div className="imgdiv">
              <h1>{`${element.status}`}</h1>
              <p><b className='bold'>{`${element.price} $`}</b></p>
              <p className='iconP1'><FontAwesomeIcon icon={faLocationDot} />{`     ${element.address}`}</p>
              <p className='iconP'><FontAwesomeIcon icon={faBath} />{`  :  ${element.baths} bathrooms`}</p>
              <p className='iconP'><FontAwesomeIcon icon={faBed} />{`  :  ${element.beds} bedrooms`}</p>
            </div>
            <div className='class-btn'>
              <button className='btn1' onClick={() => handleDelete(element.id)}>Delete</button>
              <button className='btn1' onClick={handleShow}>Email Us</button>
              <button className='btn1' onClick={handleShowCommentInput}>Add Comment</button>
              <Link to={element.webUrl}><button className='btn1'>More Info</button></Link>
            </div>
            {showCommentInput && (
            <div>
              <textarea
                rows="3"
                value={newComment}
                onChange={handleCommentChange}
                style={{ width: "100%", marginBottom: "10px" }}
              ></textarea>
              <button variant="primary" onClick={handleAddComment}>
                Submit
              </button>
            </div>
          )}
          {comments.length > 0 && (
            <div>
              <h5>Comments:</h5>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          )}
          </div>
          <ModelFun show={show} handleClose={handleClose} movie={element} />
         
        </div>
      ))}
    </>
  );
}