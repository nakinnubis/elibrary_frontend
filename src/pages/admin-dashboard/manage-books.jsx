import React, { FC, useContext, useEffect, useState } from 'react';
import AdminCardListComponent from '../../components/AdminCardListComponent';
import NotificationListComponent from '../../components/e-library/NotificationListComponent';
import Heading from '../../components/Heading';
import { AuthContext } from '../../context/AuthContext';
import DashboardStyles from '../../styles/DashboardStyles';
import { Modal, Button, Container, Row, Col, Table } from 'react-bootstrap'
import AddBookModal  from '../../components/AddBookModal';
import AddCategoryModal  from '../../components/AddCategoryModal';
import AddFolderModal  from '../../components/AddFolderModal';
import AddTagModal  from '../../components/AddTagModal';
import { useHistory } from "react-router-dom";
import {ManageComponents} from '../../components/AddComponents'
import {BookListComponent} from '../../components/BookListComponent'
// import 'bootstrap/dist/css/bootstrap.min.css';


 

const ManageBooks = () => {
  const [data, setdata] = useState([]);
  const [modalBookShow, setBookModalShow] = React.useState(false);
  const [modalFolderShow, setFolderModalShow] = React.useState(false);
  const [modalCategoryShow, setCategoryModalShow] = React.useState(false);
  const [modalTagShow, setTagModalShow] = React.useState(false);
  const [ user, setUser ] = useState("admin")

  const openCat =()=>{
    setCategoryModalShow(true)
  }

  const openFolder =()=>{
    setFolderModalShow(true)
  }

  const openBook =()=>{
    setBookModalShow(true)
  }

  const openTag =()=>{
    setTagModalShow(true)
  }



const booKdata = async()=> {
    try{
      const response = await fetch('http://102.130.127.119:80/api/Document/All?page=1&pageSize=10', {
            method: 'GET',
            headers: {
                ContentType: 
                    'application/json',
                ApiKey:
                    'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
            },
        });
        let bookResult = await response.json()
        
        return bookResult.data

          // setdata(bookResult)
          // console.log("testin", bookResult)

    } catch(error){
      
    }
  };

  useEffect(async () => {
      const bookDetails = await booKdata()
      console.log("testin", bookDetails)
      setdata(bookDetails)
      console.log("inside effect",data)
      let admin =(JSON.parse(global.localStorage.getItem("admin")));    
      setUser(admin.username)
  
  }, [])
  return (
      <>
    <DashboardStyles className='wrapper'>
     
      <ManageComponents 
        openCat={openCat}
        openBook = {openBook}
        openFolder = {openFolder}
        openTag = {openTag}
        
      />
      
     
      <Heading heading='E-Library Activities' />
      
      
    <BookListComponent data={data}/>
    </DashboardStyles>
    
    <AddBookModal
                url= {`http://102.130.127.119:80/api/Document/Upload?username=${user}`}
                show={modalBookShow}
                onHide={() => setBookModalShow(false)}
              />
    <AddFolderModal
                show={modalFolderShow}
                onHide={() => setFolderModalShow(false)}
              />
    <AddCategoryModal
                show={modalCategoryShow}
                onHide={() => setCategoryModalShow(false)}
              />
    <AddTagModal
                show={modalTagShow}
                onHide={() => setTagModalShow(false)}
              />
   </> 
  );
};

export default ManageBooks;


