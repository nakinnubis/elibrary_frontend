import { Modal} from "react-bootstrap";
import React, { useState, useEffect, useRef } from 'react';
// import { useRef } from 'react'
import "../styles/iframe.css"
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function PdfviewerReact(props) {
// export default function PdfviewerReact({ url = "", display = false, changeDisplay }) {
  let ref = useRef()


  // useEffect(() => {
  //   window.addEventListener('click', removeClick)
  //   return () => window.removeEventListener('click', removeClick)
  // }, [])

  // const removeClick = (e) => {
  //   console.log(e.target)
  //   console.log(ref.current)
  //   if (e.target === ref.current) {
  //     console.log("hiii")
  //     changeDisplay()
  //   }
  // }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const Base_Url = "https://1b9c41ffd051.ngrok.io/"
//   const Base_Url = "http://102.130.127.119:80/"
    
  function onDocumentLoadSuccess({ numPages }) {
            setNumPages(numPages);
            setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

   return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <div className="app">
        <h4>Single Page</h4>
        <Document
          // URL={`${Base_Url + url}`}
          
          file={{url: `${Base_Url + props.url}`}}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="pdfbutton"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className="pdfbutton"
          >
            Next
          </button>
        </div>
    </div>
        
        

    </Modal>
  );

// return (display ?
//     (<div className={"pdfwrapper-frame"} ref={ref}>
//     <div className="App">
//       <h4>Single Page</h4>
//       <Document
//         URL={`${Base_Url + url}`}
        
//         file={{
//     url: `${Base_Url + url}`
//   }}
//         onLoadSuccess={onDocumentLoadSuccess}
//         onLoadError={console.error}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <div>
//         <p>
//           Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
//         </p>
//         <button
//           type="button"
//           disabled={pageNumber <= 1}
//           onClick={previousPage}
//           className=".pdfbutton"
//         >
//           Previous
//         </button>
//         <button
//           type="button"
//           disabled={pageNumber >= numPages}
//           onClick={nextPage}
//           className=".pdfbutton"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//     </div>) :
//     <></>
//   )

}