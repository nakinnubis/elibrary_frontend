import React, { useContext, useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap'
import PdfImage from '../assets/pdf-image.png'
import DocImage from '../assets/doc-images.png'
import FormViewer from './formModal'
import "../styles/modal.css"
// import { useState } from 'react';


export default function UploadViewer (){
    const [showBooks, setShowBooks] = useState([])
    const [showForm, setShowForm] = useState(false)

    const handleClose = () => setShowForm(false);
    const handleShow = () => setShowForm(true);

 let books = JSON.parse(global.localStorage.getItem("books"));
 useEffect(()=>{
        // let user = JSON.parse(global.localStorage.getItem("user"));
        
        // setUser(user)
        let books = JSON.parse(global.localStorage.getItem("books"));
        console.log(books)
        setShowBooks(books)
    }, [])

    return(
    <>
        <Modal.Header closeButton>
        <div modalcard-top>
            {/* <h2 onClick={handleShow}><span>&#10514;</span>New Upload</h2> */}
            <h2><span>&#10514;</span>New Upload</h2>

            <h2>X</h2>
        </div>
        </Modal.Header>
        <Modal.Body>
          

          {showBooks.map((item) => {
              return (
                  <div className="col" key={item.objectId}>
                    <p>{item.bookUrl.includes('.doc') ? "mmm" : "llll"}</p>
                    <p>{item.bookTitle}</p>
                  </div>
              )
          })}


          
          {/* <p>{showBooks}</p> */}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
        {/* formmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}
          {
              <Modal
                show={showForm}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                style={{zIndex:2000}}>
                <FormViewer></FormViewer>
                </Modal>
          }
    </>)
}