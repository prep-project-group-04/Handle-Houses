// @ts-nocheck
import './House.css';
import React, { useRef, useState } from 'react';

export default function House(props) {
    const [comments, setComments] = useState([]);
    const [showCommentInput, setShowCommentInput] = useState(false);
    const comment = useRef();
    const handleAddComment = (homeId, userId) => {

        setComments(comment.current.value); // Add new comment
        console.log(comments)

    }
let id=10;
    const handleShowCommentInput = () => {
        setShowCommentInput(true); // Show comment input textarea
    };
    return (
        <>
            <div className="swiperGroup">
                <img src={props.data.photo} alt='home' />
                <div>
                    <div><button className='btn1' onClick={handleShowCommentInput}>Add Comment</button>

                {showCommentInput && (
            <div>
              <textarea
              ref={comment}
                rows="3"
                style={{ width: "100%", marginBottom: "10px" }}
              >

              </textarea>
              <button variant="primary" onClick={(e,s)=>handleAddComment(props.data.id,id)}>
                Submit
              </button>
            </div>
          )}
        
                </div></div>
            </div>
        </>
    )
}