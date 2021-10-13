import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { Spinner } from "react-bootstrap";

import "../styles/iframe.css"
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Pdfviewer({ url = "", display = false, changeDisplay }) {
  let ref = useRef()
  const [numPages, setNumPages] = useState(null);
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
  }

  return (display ?
    (<div className={"wrapper-frame"} ref={ref}>

      <div className="modal-content">
        <div className="iframe-header">
        <p>Please be patient as the file may take time to load. Thank You</p>
        <button type="button"  className="closebtn" onClick={changeDisplay}>
          &times;
        </button>
      </div>
      <div className="app">
        <Document
          // URL={`${Base_Url + url}`}
          
          file={{url: url}}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
          // options={{ workerSrc: "/pdf.worker.js" }}
          onContextMenu={(e) => e.preventDefault()}
          className="pdf-container"
          loading = {<Spinner animation="border" role="status"></Spinner>}
      
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} 
        pageNumber={index + 1}
        loading = {<Spinner animation="border" role="status"></Spinner>} 
        />
      ))}
    </Document>
      </div>
      </div>
      
    </div>) :
    <></>
  )
}
