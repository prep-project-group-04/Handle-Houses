import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';


export default function Module (props){

    const commentRef = useRef()

    // function submitHandler(e) {
    //     e.preventDefault();
    //     let userComment = commentRef.current.value;
    //     console.log(userComment)
    //     let newMovie = { ...props.movie, userComment }
    //     props.commentHandler(newMovie, newMovie.id);
    //   }
    

    // async function updateCommentHandler (e){
    //     e.preventDefault()
    //     let url =`http://localhost:3003/updateComment`;
        
    //     let response = await fetch(url,{

    //         method: "PUT",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(
    //             {
    //               user_id: 21,
    //               Home_id: 14,
    //               comment: commentRef
    //             }
    //         )
            
    //     })      
    // }
    
    
            


return(
 <>
 <Modal show={props.show2} onHide={props.handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <br /><br />
                    {/* {(props.movie.comment) ? (props.movie.comment) : "No comment Added "} */}
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            
                            <Form.Label>Comment:</Form.Label>
                            <Form.Control type="text" ref={commentRef} placeholder="Enter your comment" />
                       
                       
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Send
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose2}>
                        Close
                    </Button>
                    {/* <Button variant="primary" type="submit" >
                        add to fav
                    </Button> */}
                </Modal.Footer>
            </Modal>   
 </>
)
}