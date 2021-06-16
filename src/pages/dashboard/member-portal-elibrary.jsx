import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import DashboardStyles from "../../styles/DashboardStyles";
// import "../../styles/LibStyles.module.css";
import Pdfviewer from "../../components/pdfviewer";
import Credit from "../../components/statusModal";
import UploadViewer from "../../components/uploadModal";
import { getTotalAuthors } from "../../helper/general";
import Bookicon from "../../assets/book-icon.svg";
import Searchicon from "../../assets/search-icon.svg";
import { Modal, Button } from "react-bootstrap";
import Pagination from "react-js-pagination";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

const stopScroll = e => {
  e.preventDefault();
  
};

const MemberPortalELibrary = () => {
  const userData = useContext(AuthContext);
  const [pdf, setPdf] = useState({ display: false, url: null });
  const [modal, setModal] = useState({ display: false });
  let ref = useRef();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [searchBook, setSearchBook] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [goTo, setGoto] = useState(1);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(12);
  const baseUrl = " https://elib.vascloud.ng/";
  const [activePage, setActivePage] = useState(1);
  const [TotalBooks, SetTotalBooks] = useState(0);
  
  
  const { search } = useLocation()
  const memberData = queryString.parse(search)
  const { memberType, isFinanciallyUpdated } = memberData
  window.localStorage.setItem("user", JSON.stringify(memberData))
  
  
  useEffect(() => {
    if (isFinanciallyUpdated=="Active") {
      setStatus(true);
    }
  }, []);

  const getData = async () => {
    let url =""
    if (parseInt(memberType) == 1){
      url = "MembersOnlyDocumentListing"
    }
    if (parseInt(memberType) == 2){
      url ="CorporateBodiesDocumentListing"
    }
    try {
      const response = await fetch(
        `${baseUrl}api/Document/${url}?page=${page}&pageSize=${pageSize}`,

        
        {

          method: "GET",
          headers: {
            ApiKey:
              "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
            
          }
        }
      );
      const doc = await response.json();
      return doc
    } catch (error) {
      console.log(error);
    }
  };


  const getTotalBooks = async () => {
  
    try {
      const response = await fetch(
        ` ${baseUrl}api/Document/BookCounts`,
        {
          method: "GET",
          headers: {
            ApiKey:
              "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
            MemberType: parseInt(memberType)
            
          }
        }
      );
      const doc = await response.json();
      return doc
    } catch (error) {
      console.log(error);
    }
  };

  const liveSearch = async () => {
    try {
      const response = await fetch(
        `${baseUrl}api/Document/liveSearch?keyword=${searchBook}`,
        // `${baseUrl}api/Document/liveSearch?keyword=e}`,
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
  }, [searchBook]);

  useEffect( async () => {
    let doc =  await getData();
    let NumBooks = await getTotalBooks();
    SetTotalBooks(NumBooks?.data)
    setData(doc?.data);
  }, []);

  

  const showPdf = data => {
    let book_url = data._source.path;
    setPdf({ display: true, url: book_url });
  };

  const showModal = () => {
    setModal({ display: true });
  };

  const toggleModal = () => {
    setModal({ display: !modal.display });
  };

  const togglePdf = () => {
    setPdf({ ...pdf, display: !pdf.display });
  };


  const handlePagination = pageNumber => {
    let url =""
    if (parseInt(memberType) == 1){
      url = "MembersOnlyDocumentListing"
    }
    if (parseInt(memberType) == 2){
      url ="CorporateBodiesDocumentListing"
    }
    axios
      .get(
        `${baseUrl}api/Document/${url}?page=${pageNumber - 1}&pageSize=${pageSize}`,

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
    let url =""
    if (parseInt(memberType) == 1){
      url = "MembersOnlyDocumentListing"
    }
    if (parseInt(memberType) == 2){
      url ="CorporateBodiesDocumentListing"
    }
    axios
    .get(
      `${baseUrl}api/Document/${url}?page=${goTo - 1}&pageSize=${pageSize}`,
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

  const displayUsers = data ? data.map((user, index) => {
    return (
      <div className="col" key={index}>
        {user && (
          <div className="card h-100 card-shadow card-hover">
            <div className="img-cont my-auto" onScroll={stopScroll}>
              <img
                className="img-cus"
                src={`${baseUrl + user?._source.thumbnailpath}`}
                alt="Book Image"
                width="100%"
              />
            </div>
            <div className="card-body d-flex flex-nowrap align-content-center align-items-center justify-content-between">
              <p className="card-text card-lft">{user?._source.title}</p>
            </div>
            <div
              onClick={() => (status ? showPdf(user) : showModal())}
              className="card-footer bg-white text-center d-flex justify-content-evenly card-foot"
              style={{ cursor: "pointer" }}
            >
              <img
                src={Bookicon}
                width="20"
                height="20"
                className="card-ft-left"
                alt="Logo"
              />
              <small className="card-ft-right align-self-center">
                Start reading
              </small>
            </div>
          </div>
        )}
      </div>
    );
  }) : '';

  return (
    <DashboardStyles className={""}>
      <section className="container">
        <h3 className={`title`}>My Book History</h3>
        <div className={`filter w-100 row mb-2 mt-2`}>
          <div className="col-md-4">
            <div className={`search-wrapper my-3 p-2`}>
              <img
                className={`search-icon`}
                src={Searchicon}
                alt="Search Icon"
              />
              <input
                type="text"
                className="search-input w-75"
                placeholder="Search books, author, keywords"
                onChange={e => {
                  setSearchBook(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="filter-custom my-3 p-2">
              <button type="button" className="btn btn-primary books px-3 mb-1">
                Books{" "}
                <span className="badge bg-dark badge-custom">
                  {data ? data.length : 0}
                </span>
              </button>
              
              <div className="btn-link-custom mb-1">
                <a
                  className="btn btn-link btn-sm dropdown-toggle text-secondary text-decoration-none"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </a>

                {/* <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul> */}
              </div>

              <div className="btn-link-custom mb-1">
                <a
                  className="btn btn-link btn-sm dropdown-toggle text-secondary text-decoration-none"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Format
                </a>

                {/* <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container list mb-5 mt-5">
        {/* <p className="list-total mb-4">{`Showing 1 - ${data?.length} books`}</p> */}
        <div className="row row-cols-1 row-cols-md-4 g-5 mb-2">
          {data && data.length < 1 && <div>No Book Matched your search</div>}

          {displayUsers}
        </div>
      </section>

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
            />
          </div>

          <div className="pag-col col-sm-3  d-flex">
            <p className="align-self-baseline">Go to Page: </p>
            <input
              type="number"
              className="py-1 px-2 align-self-baseline"
              min="1"
              max={Math.ceil(TotalBooks/pageSize)}
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
      {pdf.display && (
        <Pdfviewer
          display={pdf.display}
          changeDisplay={togglePdf}
          url={pdf.url}
        />
      )}

      {modal.display && (
        <Credit display={modal.display} changeModalDisplay={toggleModal} />
      )}

    </DashboardStyles>
  );
};

export default MemberPortalELibrary;


