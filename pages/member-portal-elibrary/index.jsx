import React, { useContext, useState, useEffect, useRef } from 'react';
// import CardListComponent from '../../components/CardListComponent';
// import NotificationListComponent from '../../components/e-library/NotificationListComponent';
import Image from 'next/image';
import Heading from '../../components/Heading';
import { AuthContext } from '../../context/AuthContext';
import DashboardStyles from '../../styles/DashboardStyles';
import styles from "../../styles/LibStyles.module.css"
import Pdfviewer from '../../components/pdfviewer';
import Styleframe from "../../styles/iframe.module.css"
import { getTotalAuthors } from "../../helper/general"
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
    const elib = await res.json();

    return {
        props: {
            data: elib,
        },
    };
};

const stopScroll = (e) => {
    e.preventDefault();
    console.log("scrolling")
}

const Index = ({ data }) => {
    const userData = useContext(AuthContext);
    const [pdf, setPdf] = useState({ display: false, url: null })
    let ref = useRef()


    useEffect(() => {
        window.addEventListener('click', removeClick)
        return () => window.removeEventListener('click', removeClick)
    }, [])

    const removeClick = (e) => {
        console.log(e.target)
        console.log(ref.current)
        if (e.target === ref.current) {
            console.log("hiii")
            changeDisplay()
        }
    }

    const showPdf = (data) => {
        console.log(data)
        let book_url = data.bookUrl
        setPdf({ display: true, url: book_url })
    }

    const togglePdf = () => {
        console.log(pdf);
        setPdf({ ...pdf, display: !pdf.display })
    }

    return (
        <DashboardStyles className={""} >
            {/* <Heading heading='Quick Actions' /> */}
            {/* <CardListComponent /> */}
            {/* <Heading heading='Recent Notifications' /> */}
            {/* <NotificationListComponent response={data} /> */}

            <section className="container">
                <h3 className={`${styles.title}`}>My Book History</h3>
                <div className={`${styles.filter} w-100 row mb-2 mt-2`}>
                    <div className="col-md-4">
                        <div className={`search-wrapper my-3 p-2`}>
                            {/* <Image className="search-icon" src="/search-icon.svg" alt="Search Icon"/> */}
                            <img className={`search-icon`} src="/search-icon.svg" alt="Search Icon" />
                            <input type="text" className="search-input w-75" placeholder="Search books, author, keywords" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="filter-custom my-3 p-2">
                            <button type="button" className="btn btn-primary books px-3 mb-1">
                                Books <span className="badge bg-dark badge-custom">{data?.books.length}</span>
                                <span className="visually-hidden">unread messages</span>
                            </button>
                            <button type="button" className="btn btn-primary categories px-3 mb-1">
                                Categories <span className="badge badge-cat">100</span>
                                <span className="visually-hidden">unread messages</span>
                            </button>
                            <button type="button" className="btn btn-primary authors px-3 mb-1">
                                Authors <span className="badge badge-cat">{getTotalAuthors(data?.books)}</span>
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
                <p className="list-total mb-4">{`Showing 1 - ${data?.books?.length} books`}</p>
                <div className="row row-cols-1 row-cols-md-4 g-5 mb-2">

                    {data?.books?.map(item => {
                        return (
                            <div className="col" key={item.objectId}>
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
                                        <img className="card-img-top img-cus" src={`${item.bookUrl.includes('.pdf') ? '/pdf-image.png' : 'doc-image.png'}`} alt="Book Image" width='100%'/>
                                    </div>
                                    <div className="card-body d-flex flex-nowrap align-content-center align-items-center justify-content-between">
                                        <p className="card-text card-lft">{item.bookTitle}</p>
                                    </div>
                                    <div onClick={() => showPdf(item)} className="card-footer bg-white text-center d-flex justify-content-evenly card-foot" style={{ cursor: 'pointer' }}>
                                        <Image src='/book-icon.svg' width='20' height='20' className="card-ft-left" alt="Logo" />
                                        <small className="card-ft-right align-self-center" >Start reading</small>

                                    </div>
                                </div>
                            </div>
                        )
                    })}




                </div>

            </section>

            <section className="container pag my-5">
                <div className="row d-flex justify-content-evenly">
                    <div className="pag-col col-sm-3 my-1">
                        <button class="btn"> {">"} </button>
                        <a className="btn btn-link btn-sm text-secondary text-decoration-none" href="#" role="button"> Prev </a>

                    </div>
                    <div class="pag-col col-sm-3 my-1">
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



        </DashboardStyles>
    );
};

export default Index

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