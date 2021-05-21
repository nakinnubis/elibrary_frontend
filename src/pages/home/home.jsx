import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import ELibLogo from "../../assets/nape-e-lib.svg"
import SearchIcon from "../../assets/search-icon.svg"
import ForwardArrow from "../../assets/forward-arrow.svg"
import OnlineLib from "../../assets/Online Library 2.svg"
import Geology from "../../assets/geology.svg"
import Book3 from "../../assets/book3.svg"
import CartIcon from "../../assets/cart-icon.svg"
import BookIcon from "../../assets/book-icon.svg"
import DesktopPix from "../../assets/Desktop-picture.svg"
import ReadAnyway from "../../assets/read-anywhere.svg"
import SaveTime from "../../assets/save-time.svg"
import Explore from "../../assets/explore.svg"
import Unlimited from "../../assets/unlimited.svg"
import NapeLogo from "../../assets/napelogo.svg"
import Profileicon from "../../assets/profile-icon.svg";
import Padlock from "../../assets/padlock.svg";
import {Spinner} from "react-bootstrap"
import Pdfviewer from "../../components/pdfviewer";
import UploadViewer from "../../components/uploadModal";
import Credit from "../../components/statusModal";
import AccessDeniedModal from "../../components/AccessDeniedModal"
import { Modal, Button } from "react-bootstrap";
import Pagination from "react-js-pagination";
import "./index.css"
import axios from "axios";

export default function Home() {
    const [data, setData] = useState([])
    const baseUrl = "https://1b9c41ffd051.ngrok.io/";
    const [pdf, setPdf] = useState({ display: false, url: null });
    const [modal, setModal] = useState({ display: false });
    const [showUpload, setShowUpload] = useState(false);
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(12)
    const [goTo, setGoto] = useState(1);
    const [activePage, setActivePage] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const [TotalBooks, SetTotalBooks] = useState(0);


    

    const stopScroll = e => {
        e.preventDefault();
        console.log("scrolling");
        };
    const handleClose = () => setShowUpload(false);

    const showPdf = data => {
    let book_url = data._source.path;
    setPdf({ display: true, url: book_url });
  };

  const showModal = () => {
    setModal({ display: true }); 
  };

  const toggleModal = () => {
    console.log(modal);
    setModal({ display: !modal.display });
  };

  const togglePdf = () => {
    console.log(pdf);
    setPdf({ ...pdf, display: !pdf.display });
  };

  // let history = useHistory();
  // let admin = JSON.parse(global.localStorage.getItem("admin"))
  // let member= JSON.parse(global.localStorage.getItem("user"))
  // let status = JSON.parse(global.localStorage.getItem("memStatus"))
  
  
  const getData = async () => {
    try {
      const response = await fetch(
        `${baseUrl}api/Document/MembersOnlyDocumentListing?page=${page}&pageSize=${pageSize}`,
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

 
  const getTotalBooks = async () => {
  
    try {
      const response = await fetch(
        `https://1b9c41ffd051.ngrok.io/api/Document/BookCounts`,
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
    let doc = await getData();
    if((doc) !== undefined || doc !== null){
      setData(doc.data);
      
    }
    
    let NumBooks = await getTotalBooks();
    if((NumBooks)!== undefined || NumBooks !== null){
     SetTotalBooks(NumBooks.data)
    }
   
  
    
  }, []);


  const handlePagination = pageNumber => {
    axios
      .get(
        `${baseUrl}api/Document/MembersOnlyDocumentListing?page=${pageNumber - 1}&pageSize=${pageSize}`,
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
      `${baseUrl}api/Document/MembersOnlyDocumentListing?page=${goTo - 1}&pageSize=${pageSize}`,
      // `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=20`
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

  // const logout = () => {
  //   window.localStorage.clear();
  //   history.push("/");
  // };

  const displayUsers = data.map((user, index) => {
    return (
      <div className="col" key={index}>
        {user && (
          <div className="card h-100 card-shadow card-hover">
            <div className="img-cont my-auto" onScroll={stopScroll}>
              <img
                className="card-img-top img-cus"
                src={`${baseUrl + user?._source.thumbnailpath}`}
                alt="Book Image"
                width="100%"
                
              />
            </div>
            <div className="card-body d-flex flex-nowrap align-content-center align-items-center justify-content-between">
              <p className="card-text card-lft">{user?._source.title}</p>
            </div>
            <div
              onClick={setModalShow(true)}
            
              className="card-footer bg-white text-center d-flex justify-content-evenly card-foot"
              style={{ cursor: "pointer" }}
            >
                <img src={BookIcon} className="card-ft-left" alt="Logo"/>
              {/* <img
                src={Bookicon}
                width="20"
                height="20"
                className="card-ft-left"
                alt="Logo"
              />
              <small className="card-ft-right align-self-center">
                Start reading
              </small> */}
            </div>
          </div>
        )}
      </div>
    );
  });


  return (
    <>
      {/* <header className="white-text green-background p-2 sticky-top">
        <div className="container logo-wrapper">
            <div className="logo">
                <div>
                    <img src={ELibLogo}  alt="Nape Logo" className="e-lib-logo" />
                </div>
                { (member || admin) ?
                <div className="logout" onClick={logout}>Logout</div>
                :
                <div className="dropdown">
                    <button className="btn dropdown-toggle text-white login-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="login-span">Login</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <Link to="/login">
                        <li className="dropdown-item drop-style">
                            Login as a Member
                        </li>
                        </Link>
                        <Link to="/admin">
                        <li className="dropdown-item drop-style">
                            Login as an Admin
                        </li>
                        </Link>
                    </ul>
                    <button className="signin">Sign Up</button>
                </div> 
               
                }

                
            </div>
            <div className="header-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid px-0">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link text-white header-text" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white header-text" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white header-text" href="#" tabindex="-1" aria-disabled="true">Contact US</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white header-text" href="https://nape.org.ng/" tabindex="-1" aria-disabled="true">Nape Main Site</a>
                            </li>
                        </ul>
                        <div className="d-flex bg-white float-right search">
                            <img src={SearchIcon} alt="" />
                            <input className="form-control search-input" type="search" placeholder="Search books, author, keywords" aria-label="Search"/>
                        
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
      </header> */}

      <section className="container-fluid e-lib pb-5">
        <div className="container e-lib_box">
            <div className="row">
                <div className="col-md-5">
                    <h1 className="py-5 mt-5">Gain New Knowledge</h1>
                    <p className="mb-5">with NAPE online library of resources and tools, trusted by experts & professionals
                        worldwide.</p>
                    {/* <div className="search-wrapper my-5 p-2">
                        <img className="search-icon" src={SearchIcon} alt="Search Icon" />
                        <input type="text" className="search-input grey-text w-75" placeholder="Search books, author, keywords" />
                    </div> */}
                        {/* <Link to="/login"> */}

                            <a className="text-anchor no-decor mb-4 d-block" href="https://members.nape.org.ng/auth/login/">Login as a member <img src={ForwardArrow}alt="Forward Icon" />
                            </a>
                    {/* </Link> */}
                </div>
                <div className="col-md-7">
                    <img className="mt-5 login-img" src={OnlineLib} alt=""/>

                </div>
            </div>
        </div>
    </section>

    <section className="container-fluid d-flex flex-column align-items-center mt-5 section-4">
        <div className="container e-lib_box">
            <div className="row my-5">
                <div className="col-md-3">
                    <div className="card">
                        <img src={Unlimited} className="card-img-top" alt="..." />
                        <div className="card-body text-center mt-4">
                            <p className="card-text">Unlimited access to the textbooks you purchase</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={Explore} className="card-img-top" alt="..." />
                        <div className="card-body text-center mt-4">
                            <p className="card-text">Explore a vast range of topics to enrich your knowledge</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={SaveTime} className="card-img-top" alt="..." />
                        <div className="card-body text-center mt-4">
                            <p className="card-text">Save time on your reading with built-in study tools</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={ReadAnyway} className="card-img-top" alt="..." />
                        <div className="card-body text-center mt-4">
                            <p className="card-text">Read anywhere: on your smartphone, tablet or computer</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="row mb-4">

                <div className="col-md-5">
                    <h5 className="mt-5 intro-header">INTRODUCING</h5>
                    <h3 className="learn-h3">A simple subscription for all your books in one place</h3>
                    <p className="mb-5 para">Most experts don’t have books in one place.
                        Get unlimited access to all of your learning resources, whenever you need them, at a price that
                        works for you. Choose a flexible monthly plan, or save money on an annual subscription.</p>
            
                    {/* <p><button className="btn btn-success">Start free trail</button>
                        <button className="btn btn-link text-decoration-none text-success">view pricing</button></p> */}
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <img className="learn learn-iframe" src={DesktopPix} alt="Desktop Photo" />
                </div>
            </div>
        </div>
    </section>

    <section className="container-fluid pb-5 section-5">
        <div className="container">
            <div className="row">
                <h5 className="mt-5 intro-header">DISCOVER</h5>
                <h3 className="learn-h3">Go beyond your reading list</h3>
                {/* <p className="para d-flex justify-content-between"><span>with a variety of differents expert books</span>
                    <button className="btn btn-link text-decoration-none text-success"><strong>View all
                            categories</strong></button>
                </p>

                <div className="row g-2 pb-5">
                    <div className="col-md-4">
                        <div className="banner d-flex p-3">
                            <img src={Geology} alt="Card Banner" />
                            <div className="content">
                                <h5 className="mb-0 pb-2">Geology</h5>
                                <p className="mb-0">5,287 books</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner d-flex p-3">
                            <img src={Geology} alt="Card Banner" />
                            <div className="content">
                                <h5 className="mb-0 pb-2">Geology</h5>
                                <p className="mb-0">5,287 books</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner d-flex p-3">
                            <img src={Geology} alt="Card Banner" />
                            <div className="content">
                                <h5 className="mb-0 pb-2">Geology</h5>
                                <p className="mb-0">5,287 books</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="banner d-flex p-3">
                            <img src={Geology} alt="Card Banner" />
                            <div className="content">
                                <h5 className="mb-0 pb-2">Geology</h5>
                                <p className="mb-0">5,287 books</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner d-flex p-3">
                            <img src={Geology} alt="Card Banner" />
                            <div className="content">
                                <h5 className="mb-0 pb-2">Geology</h5>
                                <p className="mb-0">5,287 books</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner d-flex p-3">
                            <img src={Geology} alt="Card Banner" />
                            <div className="content">
                                <h5 className="mb-0 pb-2">Geology</h5>
                                <p className="mb-0">5,287 books</p>
                            </div>
                        </div>
                    </div>

                   <div className="col-md-4">
                        <div className="banner d-flex p-3">
                            <img src={Geology} alt="Card Banner" />
                            <div className="content">
                                <h5 className="mb-0 pb-2">Geology</h5>
                                <p className="mb-0">5,287 books</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner d-flex p-3">
                            <img src={Geology} alt="Card Banner" />
                            <div className="content">
                                <h5 className="mb-0 pb-2">Geology</h5>
                                <p className="mb-0">5,287 books</p>
                            </div>
                        </div>
                    </div>
                   <div className="col-md-4">
                        <div className="banner d-flex p-3">
                            <img src={Geology} alt="Card Banner" />
                            <div className="content">
                                <h5 className="mb-0 pb-2">Geology</h5>
                                <p className="mb-0">5,287 books</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-5" /> */}
                <p className="support d-flex justify-content-between my-3"><span>Read textbooks & find supporting
                        sources</span>
                    {/* <button className="btn btn-link text-decoration-none text-success"><strong>View all
                            categories</strong></button> */}
                </p>

                <div className="row row-cols-1 row-cols-lg-4 g-5 mt-2">
                    
                    {displayUsers}
                </div>

            </div>
        </div>
        
    </section>
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

      {
        <AccessDeniedModal show={modalShow}
        onHide={() => setModalShow(false)}
        />
      }
    {/* <footer className="container-fluid section-7 big-footer">
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-3">
                    <img className="footer-logo my-4" src={NapeLogo} alt="Footer Logo" />
                    <p className="mb-5 footer-p">NAPE is the largest professional association of petroleum geologists and
                        related disciplines in Nigeria and Africa. Members include geologists, geophysicists, CEOs,
                        managers, consultants, students and academicians.</p>
                    <p className="mb-3 footer-p">NAPE… our ideas find oil and gas.</p>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <h4 className="my-2">Recent Posts</h4>
                    <hr className="footer-top-hr" />
                    <p className="footer-p mb-4">2020 NAPE Virtual Field Trip (VFT)</p>
                    <p className="footer-p">Letter to NAPE Members from the President-Elect</p>
                </div>
                <div className="col-md-3">
                    <h4 className="my-2">Quick Links</h4>
                    <hr className="footer-top-hr"/>
                    <div>
                        <ul className="row">
                            <div className="col-md-6">
                                <li><a className="text-decoration-none" href="#">NAPE Foundation</a></li>
                                <li><a className="text-decoration-none" href="#">Membership</a></li>
                                <li><a className="text-decoration-none" href="#">Pay Online</a></li>
                                <li><a className="text-decoration-none" href="#">Member Registration</a></li>
                            </div>
                            <div className="col-md-6">

                                <li><a className="text-decoration-none" href="#">Make Donations</a></li>
                                <li><a className="text-decoration-none" href="#">Executives</a></li>
                                <li><a className="text-decoration-none" href="#">Member Login</a></li>
                                <li><a className="text-decoration-none" href="#">Events</a></li>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
            <hr className="mt-5"/>
            <div className="support d-flex justify-content-between footer-bottom"><span>Copyright © 2018 NAPE. Designed
                    by <a href="#" className="text-decoration-none lk">Lumiere</a></span>
                
            <p className="d-flex">
                <a className="ft-circle mx-2"></a>
                <a className="ft-circle mx-2"></a>
                <a className="ft-circle mx-2"></a>
            </p>
            </div>
        </div>
    </footer> */}
    
    </>
  )
}
