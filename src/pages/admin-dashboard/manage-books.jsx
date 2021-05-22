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
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(12)
  const [goTo, setGoto] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [TotalBooks, SetTotalBooks] = useState(0);

  const baseUrl = " https://1b9c41ffd051.ngrok.io/";
  
  
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
        `${baseUrl}api/Document/All?page=${pageNumber - 1}&pageSize=${pageSize}`,
       
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
      `${baseUrl}api/Document/All?page=${goTo - 1}&pageSize=${pageSize}`,
      
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

  return (
    <>
      <DashboardStyles className="wrapper">
        <ManageComponents
          openCat={openCat}
          openBook={openBook}
          openFolder={openFolder}
          openTag={openTag}
        />

        <Heading heading="E-Library Activities" />

        <BookListComponentAdmin data={data} />
        <section className="container pag my-10 flex-wrap">
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
              className="py-1 px-2 align-self-baseline"
              min="1"
              max={9}
              value={goTo}
              onChange={(e)=>{setGoto(e.target.value)}}
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
        url={` https://1b9c41ffd051.ngrok.io/api/Document/Upload?username=${user}`}
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
