import { useEffect } from 'react'
import { useRef } from 'react'
import "../styles/iframe.css"

// let Base_Url = "https://rockcodeafrica.org/"
// let Base_Url = " https://1b9c41ffd051.ngrok.io/"
let Base_Url = "https://1b9c41ffd051.ngrok.io/"

export default function Pdfviewer({ url = "", display = false, changeDisplay }) {
  let ref = useRef()
  

  useEffect(() => {
    document.addEventListener("iframebody", (event) => {
    // event.preventDefault();
    
  });
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
  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault();
  // });
  return (display ?
    (<div className={"wrapper-frame"} ref={ref}>
      <embed
        title="Inline Frame Example"
        className={"iframe-display"}
        // src = {`https://docs.google.com/gview?url=${Base_Url + url}&embedded=true`}>
        src = {`${Base_Url + url}#toolbar=0`}>
        
      </embed>
    </div>) :
    <></>
  )
}
