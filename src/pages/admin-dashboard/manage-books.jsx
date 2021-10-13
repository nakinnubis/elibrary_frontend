import React, { FC, useContext, useEffect, useState } from "react";
import AdminCardListComponent from "../../components/AdminCardListComponent";
import NotificationListComponent from "../../components/e-library/NotificationListComponent";
import Heading from "../../components/Heading";
import { AuthContext } from "../../context/AuthContext";
import DashboardStyles from "../../styles/DashboardStyles";
import { Modal, Button, Container, Row, Col, Table } from "react-bootstrap";
import AddBookModal from "../../components/AddBookModal";
import AddCategoryModal from "../../components/AddCategoryModal";
import AddFolderModal from "../../components/AddFolderModal";
import AddTagModal from "../../components/AddTagModal";
import { useHistory } from "react-router-dom";
import { ManageComponents } from "../../components/AddComponents";
import { BookListComponentAdmin } from "../../components/BookListComponentAdmin";
import SuccessModal from "../../components/SuccessModal";
import Pagination from "react-js-pagination";
import axios from "axios";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
// import 'bootstrap/dist/css/bootstrap.min.css';

const ManageBooks = () => {
  const [data, setData] = useState([]);
  const [modalBookShow, setBookModalShow] = React.useState(false);
  const [modalFolderShow, setFolderModalShow] = React.useState(false);
  const [modalCategoryShow, setCategoryModalShow] = React.useState(false);
  const [modalTagShow, setTagModalShow] = React.useState(false);
  const [user, setUser] = useState("");
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(12)
  const [goTo, setGoto] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [TotalBooks, SetTotalBooks] = useState(0);
  const [width, setWidth] = useState("3rem")
  const [searchBook, setSearchBook] = useState("");

  

  const baseUrl = " https://elib.vascloud.ng/";
  
  
  const { search } = useLocation();
  const { userName } = queryString.parse(search)
  // window.localStorage.setItem("admin",userName)
  
const openCat = () => {
    setCategoryModalShow(true);
  };

  const openFolder = () => {
    setFolderModalShow(true);
  };

  const openBook = () => {
    setBookModalShow(true);
  };

  const openTag = () => {
    setTagModalShow(true);
  };

  const booKdata = async () => {
    try {
      const response = await fetch(
        `${baseUrl}api/Document/All?page=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            ContentType: "application/json",
            ApiKey:
              "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
          },
        }
      );
      let bookResult = await response.json();

      return bookResult.data;

    } catch (error) {}
  };

  const getTotalBooks = async () => {
  
    try {
      const response = await fetch(
        `${baseUrl}api/Document/BookCounts`,
        {
          method: "GET",
          headers: {
            ApiKey:
              "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
            MemberType: 1
            
          }
        }
      );
      const doc = await response.json();
      return doc
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(async () => {
    const bookDetails = await booKdata();
    const NumBooks = await getTotalBooks();
    SetTotalBooks(NumBooks?.data)
    setData(bookDetails);
    setUser(userName);
    
  }, []);
   const handlePagination = pageNumber => {
    axios
      .get(
        `${baseUrl}api/Document/All?page=${pageNumber}&pageSize=${pageSize}`,
       
        {
          method: 'GET',
          headers: {
            ApiKey:
              "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c"
          }
        }
      )
      .then(res => {
        setData(res.data.data);
      });
      setActivePage(pageNumber);
      setGoto(pageNumber)
  };



  const handleGoTo = () => {
    axios
    .get(
      `${baseUrl}api/Document/All?page=${goTo}&pageSize=${pageSize}`,
      
      {
        method: 'GET',
        headers: {
          ApiKey:
            "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c"
        }
      }
    )
    .then(res => {
      setData(res.data.data);
      setActivePage(parseInt(goTo));
    });
  };

  const liveSearch = async () => {
    try {
      const response = await fetch(
        `${baseUrl}api/Document/liveSearch?keyword=${searchBook}`,

        {
          method: "GET",
          headers: {
            ApiKey:
              "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c"
          }
        }
      );
      const doc = await response.json();
      setData(doc?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    await liveSearch();
  }, [searchBook, width])

  const handleChange = (e) => {
    setSearchBook(e.target.value)
  }

  return (
    <>
      <DashboardStyles className="wrapper">
        <ManageComponents
          openCat={openCat}
          openBook={openBook}
          openFolder={openFolder}
          openTag={openTag}
        />

        <Heading heading="E-Library Activities" handleChange={handleChange} />

        <BookListComponentAdmin data={data} />
        <section className="container pag my-3 pb-5 flex-wrap">
        <div className="row d-flex justify-content-between">
          <div className="pag-col col-sm-3 my-1">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={pageSize}
              totalItemsCount={parseInt(TotalBooks)}
              pageRangeDisplayed={5}
              prevPageText="Prev"
              nextPageText="Next"
              onChange={handlePagination}
              itemClass="page-item"
              linkClass="page-link"
              activeClass="active"
              
            />
          </div>

          <div className="pag-col col-sm-3  d-flex">
            <p className="align-self-baseline">Go to Page: </p>
            <input
              type="number"
              style={{width: width, padding:"5px 7px"}}
              className="align-self-baseline"
              min="1"
              max={Math.ceil(TotalBooks/pageSize)}
              value={goTo}
              onChange={(e)=>{
                let newValue = e.target.value
                let maxValue = Math.ceil(TotalBooks/pageSize)
                if (newValue > maxValue){
                  newValue = maxValue
                }
                if (newValue < 1){
                  newValue = 1
                }
                setGoto(newValue)
                let inputLength = newValue.toString().split("").length 
                if (inputLength > 2){
                  setWidth(inputLength + "rem")
                }
                
              }}
            />
            <button
              className="btn active go align-self-baseline"
              onClick={handleGoTo}
            >
              Go
            </button>
          </div>
        </div>
      </section>
      </DashboardStyles>

      <AddBookModal
        url={` ${baseUrl}api/Document/Upload?username=${user}`}
        user={user}
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
      <AddTagModal show={modalTagShow} onHide={() => setTagModalShow(false)} />
      <SuccessModal />
    </>
  );
};

export default ManageBooks;
