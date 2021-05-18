import React, { FC, useContext, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { AuthContext } from "../../context/AuthContext";
import DashboardStyles from "../../styles/DashboardStyles";
import { Modal, Button } from "react-bootstrap";
import AddBookModal from "../../components/AddBookModal";
import AddCategoryModal from "../../components/AddCategoryModal";
import AddFolderModal from "../../components/AddFolderModal";
import AddTagModal from "../../components/AddTagModal";
import { ManageComponents } from "../../components/AddComponents";
import { BookListComponent } from "../../components/BookListComponent";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const MyBooks = () => {
  const [data, setdata] = useState([]);
  const [modalBookShow, setBookModalShow] = React.useState(false);
  const [modalFolderShow, setFolderModalShow] = React.useState(false);
  const [modalCategoryShow, setCategoryModalShow] = React.useState(false);
  const [modalTagShow, setTagModalShow] = React.useState(false);

  const { search } = useLocation();
  const { memberType, emailAddress, memberId } = queryString.parse(search)



  // const user = JSON.parse(global.localStorage.getItem("user"));
  // const { emailAddress, memberType } = user;
  // const memberId = user.memberId;

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
        ` https://1b9c41ffd051.ngrok.io/api/Document/MyDocumentListing?memberId=${emailAddress}`,
        {
          method: "GET",
          headers: {
            ContentType: "application/json",
            ApiKey:
              "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
            MemberType: parseInt(memberType),
          },
        }
      );
      let bookResult = await response.json();
      return bookResult.data;
    } catch (error) {
      console.log("Error feching resource", error);
      
    }
  };

  useEffect(async () => {
    let data = await booKdata();
    setdata(data);
  }, []);
  return (
    <>
      <DashboardStyles className="wrapper">
        <ManageComponents
          openCat={openCat}
          openBook={openBook}
          openFolder={openFolder}
          openTag={openTag}
        />

        <BookListComponent data={data} />
      </DashboardStyles>
      <AddBookModal
        url={` https://1b9c41ffd051.ngrok.io/api/Document/AddFile?memberId=${memberId}=${emailAddress}`}
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
    </>
  );
};

export default MyBooks;
