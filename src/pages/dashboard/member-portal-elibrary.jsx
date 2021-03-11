import React, { useContext, useState, useEffect, useRef } from 'react';
// import CardListComponent from '../../components/CardListComponent';
// import NotificationListComponent from '../../components/e-library/NotificationListComponent';
// import Image from 'next/image';
import Heading from '../../components/Heading';
import { AuthContext } from '../../context/AuthContext';
import DashboardStyles from '../../styles/DashboardStyles';
import "../../styles/LibStyles.module.css"
import Pdfviewer from '../../components/pdfviewer';
import Credit from '../../components/statusModal'
// import "../../styles/iframe.module.css"
import { getTotalAuthors } from "../../helper/general"
import Bookicon from '../../assets/book-icon.svg'
import Searchicon from '../../assets/search-icon.svg'
import PdfImage from '../../assets/pdf-image.png'
import DocImage from '../../assets/doc-images.png'
// import Pdfviewer from '../../components/pdfviewer';

let Base_Url = "https://rockcodeafrica.org/"
export const getStaticProps = async () => {
    const res = await fetch(
        'http://46.101.62.161:5000/api/Library/LibraryCollections',
        {
            method: 'GET',
            headers: {
                ApiKey:
                    'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
            },
        },
    );
    return res.json();

};

// export const membershipStatus = async () => {
//     const res = await fetch(
//         'http://46.101.62.161:5000/api/AnnualDue/CheckMembershipStatus',
//         {
//             method: 'GET',
//             headers: {
//                 ApiKey:
//                     'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
//             },
//         }
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
    const [data, setdata] = useState({ books: [""] });
    const [status, setStatus] = useState("");
    const [searchBook, setSearchBook] = useState("");

    useEffect(() => {
        (async () => {
            let data = await getStaticProps()
            console.log("the data", data)
            setdata(data)
        })()
    }, [])

    // useEffect(()=> {
    //     (async () => {
    //         let memberStatus = await membershipStatus()
    //         console.log("stus", memberStatus)
    //         setStatus(memberStatus.data)
    //     })()
    // },[])
     useEffect(()=>{
        // let user = JSON.parse(global.localStorage.getItem("user"));
        let memStatus = JSON.parse(global.localStorage.getItem("memStatus"));
        // setUser(user)
        if (memStatus) {

            if(memStatus === "You are not financially up to date member"){
            setStatus(false)
            }
            else{
            setStatus(true)
            }
    } 
    }, [])
    const removeClick = (e) => {
        console.log(e.target)//
        console.log(ref.current)
        if (e.target === ref.current) {
            console.log("hiii")
            // changeDisplay()
        }
    }

    const showPdf = (data) => {
        console.log(data)
        let book_url = data.bookUrl
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
    const filtereditems = data.books.filter((item) => item.thumbnailUrl !== null)
    const availableBooks = filtereditems.filter((val) => {
                        if (searchBook == ""){
                            return val
                        }else if (val.bookTitle.toLowerCase().includes(searchBook.toLowerCase())|| val.bookAuthor.toLowerCase().includes(searchBook.toLowerCase())){
                          return val  
                        }
                    })
   
    const handleChange = (e) =>{
        // e.preventDefault();
        setSearchBook(e.target.value);
        // if(searchBook.length > 0){

            filtereditems = filtereditems?.filter(book => book.bookTitle.toLowerCase().includes(searchBook.toLowerCase())|| book.bookAuthor.toLowerCase().includes(searchBook.toLowerCase()))
            console.log(filtereditems);
    //   filtereditems =  filtereditems.map(book =>{
    //             if(book.bookTitle == input) return book
    //         })
//     const [searchField, setSearchField] = useState('')
// const filteredBook = books?.filter(book => book.name.toLowerCase().includes(searchField.toLowerCase())
//     || book.book_type.toLowerCase().includes(searchField.toLowerCase())
// || book.book_type.toLowerCase().includes(searchField.toLowerCase())
//   )
// <form>
//           <input type="text" name="search" placeholder="Search by name, type" onChange={e => setSearchField(e.target.value)} />
//         </form>
        // }

    //     console.log(filtereditems);
    };

    // if (input.length > 0){
    //     filtereditems = filtereditems.filter((i) => {
    //         return i.thumbnailUrl.match(input)
    //     }) 

    //     }
    
    return (
        <DashboardStyles className={""} >
            {/* <Heading heading='Quick Actions' /> */}
            {/* <CardListComponent /> */}
            {/* <Heading heading='Recent Notifications' /> */}
            {/* <NotificationListComponent response={data} /> */}

            <section className="container">
                <h3 className={`title`}>My Book History</h3>
                <div className={`filter w-100 row mb-2 mt-2`}>
                    <div className="col-md-4">
                        <div className={`search-wrapper my-3 p-2`}>
                            {/* <Image className="search-icon" src="/search-icon.svg" alt="Search Icon"/> */}
                            <img className={`search-icon`} src={Searchicon} alt="Search Icon" />
                            <input type="text" className="search-input w-75" placeholder="Search books, author, keywords" onChange={(e) => {setSearchBook(e.target.value)} } />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="filter-custom my-3 p-2">
                            <button type="button" className="btn btn-primary books px-3 mb-1">
                                Books <span className="badge bg-dark badge-custom">{availableBooks.length}</span>
                                <span className="visually-hidden">unread messages</span>
                            </button>
                            <button type="button" className="btn btn-primary categories px-3 mb-1">
                                Categories <span className="badge badge-cat">100</span>
                                <span className="visually-hidden">unread messages</span>
                            </button>
                            <button type="button" className="btn btn-primary authors px-3 mb-1">
                                Authors <span className="badge badge-cat">{getTotalAuthors(data)}</span>
                                <span className="visually-hidden">unread messages</span>
                            </button>
                            <button type="button" className="btn btn-primary categories px-3 mb-1">
                                Upload <span className="badge badge-cat">&#8593;</span>
                                <span className="visually-hidden">unread messages</span>
                            </button>
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
                <p className="list-total mb-4">{`Showing 1 - ${availableBooks?.length} books`}</p>
                <div className="row row-cols-1 row-cols-md-4 g-5 mb-2">
                    {
                        (availableBooks.length < 1) &&
                        <div>No Book Matched your search</div>
                    }
                    {availableBooks.map((item) => {

                        
                        return (
                            <div className="col" key={item.objectId}>
                                {item && 
                                <div className="card h-100 card-shadow">
                                    <div className="img-cont my-auto" onScroll={stopScroll}>
                                        {/* <div className={pdf.display ? Styleframe.wrapper : Styleframe.smallFrame} ref={ref}>
                                            <iframe
                                                title="Inline Frame Example"
                                                type="text/html"
                                                scrolling="no"
                                                onScroll={stopScroll}
                                                className={Styleframe.iframe}
                                                src={Base_Url + item.bookUrl}>
                                            </iframe>
                                        </div> */}
                                        {/* <img className="card-img-top img-cus" src={`${/.pdf/.test(item.bookUrl) ? PdfImage : DocImage}`} alt="Book Image" width='100%' /> */}
                                        <img className="card-img-top img-cus" src={`http://46.101.62.161:5000/${item?.thumbnailUrl}`} alt="Book Image" width='100%' />

                                    </div>
                                    <div className="card-body d-flex flex-nowrap align-content-center align-items-center justify-content-between">
                                        <p className="card-text card-lft">{item?.bookTitle}</p>
                                    </div>
                                    <div onClick={() => (status === false) ? showModal(): showPdf(item)} className="card-footer bg-white text-center d-flex justify-content-evenly card-foot" style={{ cursor: 'pointer' }}>
                                        <img src={Bookicon} width='20' height='20' className="card-ft-left" alt="Logo" />
                                        <small className="card-ft-right align-self-center" >Start reading</small>

                                    </div>
                                </div> }
                                
                            </div>
                        )
                                    
                    })}

                </div>

            </section>

            <section className="container pag my-5">
                <div className="row d-flex justify-content-evenly">
                    <div className="pag-col col-sm-3 my-1">
                        <button className="btn"> {">"} </button>
                        <a className="btn btn-link btn-sm text-secondary text-decoration-none" href="#" role="button"> Prev </a>

                    </div>
                    <div className="pag-col col-sm-3 my-1">
                        <a className="btn btn-link btn-sm text-secondary text-decoration-none inactive" href="#" role="button"> 1 </a>
                        <button className="btn active"> 2 </button>
                        <a className="btn btn-link btn-sm text-secondary text-decoration-none inactive" href="#" role="button"> 3 </a>
                        <a className="btn btn-link btn-sm text-secondary text-decoration-none inactive" href="#" role="button"> 4 </a>
                        <a className="btn btn-link btn-sm text-secondary text-decoration-none inactive" href="#" role="button"> 5 </a>
                    </div>
                    <div className="pag-col col-sm-3 my-1">
                        <a className="btn btn-link btn-sm text-secondary text-decoration-none" href="#" role="button"> Next </a>
                        {/* <button class="btn"> > </button> */}

                    </div>
                    <div className="pag-col col-sm-3 my-1 d-flex">
                        <p className="align-self-baseline">Go to Page: </p>
                        <input type="number" className="py-1 px-2 align-self-baseline" />
                        <button className="btn active go align-self-baseline"> Go </button>
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