import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { Modal} from "react-bootstrap";

import "../styles/iframe.css"
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Pdfviewer({ url = "", display = false, changeDisplay }) {
  let ref = useRef()
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const Base_Url = " https://elib.vascloud.ng/ "


  useEffect(() => {
    window.addEventListener('click', removeClick)
    return () => window.removeEventListener('click', removeClick)
  }, [])

  const removeClick = (e) => {
    console.log(e.target)
    console.log(ref.current)
    if (e.target === ref.current) {
      changeDisplay()
    }
  }
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

  return (display ?
    (<div className={"wrapper-frame"} ref={ref}>

      <div className="iframe-header">
        <p>Please be patient as the file may take time to load. Thank You</p>
        <button type="button"  className="closebtn" onClick={changeDisplay}>
          &times;
        </button>
      </div>
      <Document
          // URL={`${Base_Url + url}`}
          
          file={{url: url}}
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
      
    </div>) :
    <></>
  )
}
