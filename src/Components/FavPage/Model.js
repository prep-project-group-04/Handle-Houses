import { useRef } from 'react';
// @ts-ignore
import Button from 'react-bootstrap/Button';
// @ts-ignore
import Modal from 'react-bootstrap/Modal';


export default function ModelFun(props) {
    return (
        <>
        
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Enter Your Name <input className='inputForm' type="text" placeholder="Please enter your Name"/></p>
            <p>Enter Your Email <input className='inputForm1' type="email" placeholder="Please contact us. Thank you."/></p>
            <p>Enter Your  Phone Number <input className='inputForm2' type="tel"/></p>
            <textarea className='textarea' placeholder="Your message" ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
