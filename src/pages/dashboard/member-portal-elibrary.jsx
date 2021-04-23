import React, { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import DashboardStyles from '../../styles/DashboardStyles';
import "../../styles/LibStyles.module.css"
import Pdfviewer from '../../components/pdfviewer';
import Credit from '../../components/statusModal'
import UploadViewer from '../../components/uploadModal'
import { getTotalAuthors } from "../../helper/general"
import Bookicon from '../../assets/book-icon.svg'
import Searchicon from '../../assets/search-icon.svg'
import { Modal, Button } from 'react-bootstrap'
import Pagination from 'react-js-pagination';
import axios from "axios";
import { Link } from 'react-router-dom';


// export const getStaticProps = async () => {
//     const res = await fetch(
//         // 'http://46.101.62.161:5000/api/Library/LibraryCollections',
//         'http://102.130.127.119:80/api/Document/All?page=2&pageSize=10',
//         {
//             method: 'GET',
//             headers: {
//                 ApiKey:
//                     'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
//             },
//         },
//     );
//     return res.json();

// };



const stopScroll = (e) => {
    e.preventDefault();
    console.log("scrolling")
}

const MemberPortalELibrary = () => {
    const userData = useContext(AuthContext);
    const [pdf, setPdf] = useState({ display: false, url: null })
    const [modal, setModal] = useState({display: false})
    let ref = useRef()
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);
    const [searchBook, setSearchBook] = useState("");
    const [showUpload, setShowUpload] = useState(false);
    const [goTo, setGoto] = useState(1)
    const [currentPage, SetCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const pageNumberLimit = 2;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
    const [ page, setPage ] = useState(1);
    const [ pageSize, setPageSize ] = useState(4)
    const baseUrl = "http://102.130.127.119:80/";
    const [activePage, setActivePage ] = useState(1)

   const getData = async()=>{
       try {
           const response = await fetch(`${baseUrl}api/Document/All?page=${page}&pageSize=${pageSize}`,
        {
            method: 'GET',
            headers: {
                ApiKey:
                    'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
            },
        },)
        const doc = await response.json()
        console.log("inside fetch function",doc.data.documents)
        console.log(doc.data)
        setData(doc.data.documents)
        console.log('after setting', data)
       }catch(error){
           console.log(error)
       }
   }

   const liveSearch = async()=>{
       try {
           const response = await fetch(`${baseUrl}api/Document/liveSearch?keyword=${searchBook}`,
        {
            method: 'GET',
            headers: {
                ApiKey:
                    'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
            },
        },)
        const doc = await response.json()
        
        // console.log("inside fetch function",doc.data.documents)
        // console.log(doc.data)
        setData(doc.data.documents)
        // console.log('after setting', data)
       }catch(error){
           console.log(error)
       }
   }

   useEffect(async()=>{
       await liveSearch()
       console.log("inside live search", data)
    //    setData()
   }, [searchBook])
    // useEffect(() => {
    //     (async () => {
    //         let doc = await getStaticProps()
    //         console.log("the data", data)
    //         setData(doc)
    //         console.log(doc)
    //         console.log("after set state",data)

    //         // check the data.document against book
    //         // window.localStorage.setItem("books", JSON.stringify(data.documents))
    //     })()
    // }, [])

    useEffect(async()=>{
        await getData()
        console.log("inside useEffect", data)
        // console.log("documents", data.data.documents)
    },[])

  
     useEffect(()=>{
        let memStatus = JSON.parse(global.localStorage.getItem("memStatus"));
        if (!memStatus) {
            setStatus(true)

            // if(memStatus === "You are not financially up to date member"){
            // if(memStatus === false){
            // setStatus(false)
            // }
            // else{
            // setStatus(true)
            // }
    } 
    }, [])

    const removeClick = (e) => {
        console.log(e.target)//
        console.log(ref.current)
        if (e.target === ref.current) {
            console.log("hiii")
            
        }
    }

    // const showPdf = (data) => {
    //     console.log(data)
    //     let book_url = data.bookUrl
    //     setPdf({ display: true, url: book_url })
    // }
    const showPdf = (data) => {
        console.log(data)
        // let book_url = data.path
        let book_url = data.path
        setPdf({ display: true, url: book_url })
    }


    const showModal = () =>{
        setModal({display: true})
    }

    const toggleModal = () => {
        console.log(modal);
        setModal({display: !modal.display});
    }
    
    const togglePdf = () => {
        console.log(pdf);
        setPdf({ ...pdf, display: !pdf.display })
    }

    const handleClose = () => setShowUpload(false);
    const handleShow = () => setShowUpload(true);

    const handlePagination =(pageNumber)=>{
         console.log(`active page is ${pageNumber}`);
    axios
      .get(
        `${baseUrl}api/Document/All?page=${pageNumber}&pageSize=${pageSize}`
        // `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=20`
      , {
            // method: 'GET',
            headers: {
                ApiKey:
                    'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
            }},)
      .then(res => {
        setData(res.data.data.documents)
        console.log("pagedata", data)
        });
        setActivePage(pageNumber);
      };
    
//   };
    
    
     // newishhhhhhhhhhhh

    
    const handleClick = (event)=>{
         
        
        let id= Number(event.target.id)

        SetCurrentPage(id);
        console.log(id)
    }

    const handleChange = (event)=>{
        setGoto(event.target.value)
        // console.log(event.target.value)
        // if (event.target.value){
        //     setGoto(event.target.value)
        // }else{
        //     setGoto(1)
        // }
       
        // console.log(goTo)
    }

    const handleGoTo=()=>{
        
        // console.log(goTo)
        // SetCurrentPage(Number(goTo))
        // console.log(currentPage)
    }

    

    // const pages = [];
    // for (let i =1; i<= Math.ceil(availableBooks.length / itemsPerPage); i++){
    //     pages.push(i)
    // }
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = availableBooks.slice(indexOfFirstItem, indexOfLastItem);

    // const renderPagesNumber = pages.map((number) => {
    //     if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
    //         return(
    //             <p key={number} id={number} className={currentPage == number ? "btn active" :"btn text-decoration-none inactive"} onClick={handleClick}> {number} </p>
    //         )
    //     }else{
    //         return null;
    //     }
    // })

    // const handleNextBtn =()=> {
    //     SetCurrentPage(Math.abs(currentPage + 1));
    //     console.log("insidehandle next", currentPage)
    //     if (currentPage + 1 > maxPageNumberLimit){
    //         setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    //         setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    //     }
    // }

    // const handlePrevBtn =()=> {
    //     SetCurrentPage(Math.abs(currentPage - 1));

    //     if((currentPage -1) % pageNumberLimit == 0){
    //         setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    //         setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    //     }
    // };

    // let pageIncrementBtn = null;
    // if (pages.length > maxPageNumberLimit){
    //     pageIncrementBtn = <button class="btn" onClick={handleNextBtn}> &#8230; </button>
    // }

    // let pageDecrementBtn = null;
    // if (minPageNumberLimit >= 1){
    //     pageDecrementBtn = <button class="btn" onClick={handlePrevBtn}> &#8230;</button>
    // }

    // const handleLoadMore =()=> {
    //     setItemsPerPage(itemsPerPage + 5 )
    // }
 
// newishhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
// hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    const displayUsers = data.map((user,index)=>{
    // const displayUsers = currentItems.map(user=>{
        return (
            // <div className="col" key={user.objectId}>
            <div className="col" key={index}>
                                {user && 
                                <div className="card h-100 card-shadow card-hover">
                                    <div className="img-cont my-auto" onScroll={stopScroll}>
                                       
                                        <img className="card-img-top img-cus" src={`${baseUrl + user?.thumbnailpath}`} alt="Book Image" width='100%' />

                                    </div>
                                    <div className="card-body d-flex flex-nowrap align-content-center align-items-center justify-content-between">
                                        <p className="card-text card-lft">{user?.title}</p>
                                    </div>
                                    <div onClick={() => (status) ? showPdf(user): showModal()} className="card-footer bg-white text-center d-flex justify-content-evenly card-foot" style={{ cursor: 'pointer' }}>
                                        <img src={Bookicon} width='20' height='20' className="card-ft-left" alt="Logo" />
                                        <small className="card-ft-right align-self-center" >Start reading</small>

                                    </div>
                                </div> }
                                
                            </div>
        )

    })

    
   
    
    return (
        <DashboardStyles className={""} >
            
            <section className="container">
                <h3 className={`title`}>My Book History</h3>
                <div className={`filter w-100 row mb-2 mt-2`}>
                    <div className="col-md-4">
                        <div className={`search-wrapper my-3 p-2`}>
                            {/* <Image className="search-icon" src="/search-icon.svg" alt="Search Icon"/> */}
                            <img className={`search-icon`} src={Searchicon} alt="Search Icon" />
                            <input type="text" className="search-input w-75" placeholder="Search books, author, keywords" onChange={(e) => {setSearchBook(e.target.value); console.log("searching book", searchBook)} } />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="filter-custom my-3 p-2">
                            <button type="button" className="btn btn-primary books px-3 mb-1">
                                Books <span className="badge bg-dark badge-custom">{data.length}</span>
                                {/* Books <span className="badge bg-dark badge-custom">{availableBooks.length}</span> */}
                                {/* <span className="visually-hidden">unread messages</span> */}
                            </button>
                            <button type="button" className="btn btn-primary categories px-3 mb-1">
                                Categories <span className="badge badge-cat">100</span>
                                {/* <span className="visually-hidden">unread messages</span> */}
                            </button>
                            <button type="button" className="btn btn-primary authors px-3 mb-1">
                                Authors <span className="badge badge-cat">{getTotalAuthors(data)}</span>
                                {/* <span className="visually-hidden">unread messages</span> */}
                            </button>
                            <Link to="/dashboard/my-books">
                            <button type="button" className="btn btn-primary categories px-3 mb-1">
                                My Books <span className="badge badge-cat">&#10514;</span>
                                {/* <span className="visually-hidden">unread messages</span> */}
                            </button>
                            </Link>
                            <div className="btn-link-custom mb-1">
                                <a className="btn btn-link btn-sm dropdown-toggle text-secondary text-decoration-none" href="#"
                                    role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                            </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>

                            <div className="btn-link-custom mb-1">
                                <a className="btn btn-link btn-sm dropdown-toggle text-secondary text-decoration-none" href="#"
                                    role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Format
                            </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="container list mb-5">
                <p className="list-total mb-4">{`Showing 1 - ${data?.length} books`}</p>
                <div className="row row-cols-1 row-cols-md-4 g-5 mb-2">
                    {
                        (data.length < 1) &&
                        <div>No Book Matched your search</div>
                    }
    
                        {displayUsers}
                            

                </div>

            </section>

            <section className="container pag my-5">
                <div className="row d-flex justify-content-evenly">
                    <div className="pag-col col-sm-3 my-1">
                        {/* <button class="btn" onClick={handlePrevBtn} disabled={currentPage == pages[0]? true : false}>&lt; Prev</button> */}
                        {/* <a className="btn btn-link btn-sm text-secondary text-decoration-none" href="#" role="button"> Prev </a> */}
                        {/* {pageDecrementBtn} */}

                        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={120}
          pageRangeDisplayed={5}
          onChange={handlePagination}
        //   itemClass={page-item}
            // linkClass={page-link}
        />
                    </div>
                    <div class="pag-col col-sm-3 my-1">

                        {/* {renderPagesNumber} */}
                    </div>
                    <div className="pag-col col-sm-3 my-1">
                        <a className="btn btn-link btn-sm text-secondary text-decoration-none" href="#" role="button"> Next </a>
                        {/* {pageIncrementBtn} */}
                        {/* <button class="btn" onClick={handleNextBtn} disabled={currentPage == pages[pages.length - 1]? true : false}> Next &gt; </button> */}
                        
                    </div>
                    {/* <ReactPaginate */}
					{/* pageCount={2} */}
					{/* // pageCount={pageCount} */}
					{/* // pageRange={2}
					marginPagesDisplayed={3}
					onPageChange={handlePagination}
                    onPageActive={handlePagination}
					// containerClassName={'container'}
					// previousLinkClassName={'page'}
					// breakClassName={'page'}
					// nextLinkClassName={'page'}
					// pageClassName={'page'}
					// disabledClassName={'disabled'}
					// activeClassName={'active'}
				// /> */}

                
                    <div className="pag-col col-sm-3 my-1 d-flex">
                        <p className="align-self-baseline">Go to Page: </p>
                        <input type="number" className="py-1 px-2 align-self-baseline" min="1" max={9} value={goTo} onChange={handleChange} />
                        <button className="btn active go align-self-baseline" onClick={handleChange}> Go </button>
                    </div>
                </div>


            </section>
            {
                pdf.display &&
                <Pdfviewer
                    display={pdf.display}
                    changeDisplay={togglePdf}
                    url={pdf.url}
                />

            }

            {
                modal.display && <Credit display={modal.display} changeModalDisplay={toggleModal} />

            }

            {
                <Modal
                show={showUpload}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <UploadViewer></UploadViewer>
                </Modal>
            }
 

        </DashboardStyles>
    );
};

export default MemberPortalELibrary

{/* ;

// Index.getInitialProps = async (cntx)=>{
//     const res = await fetch(
//             'http://46.101.62.161:5000/api/RecentNotification/RecentNews',
//             {
//               method: 'GET',
//               headers: {
//                 ApiKey:
//                   'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
//               },
//             },
//           );
//           console.log("the response", res)
//           const notifications = await res.json();
// return {
//     props:{
//         data:{notifications}
//     }
// }
// } */}