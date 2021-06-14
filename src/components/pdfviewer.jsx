import { useEffect } from 'react'
import { useRef } from 'react'
import "../styles/iframe.css"

let Base_Url = " https://elib.vascloud.ng/ "

export default function Pdfviewer({ url = "", display = false, changeDisplay }) {
  let ref = useRef()
  

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
  return (display ?
    (<div className={"wrapper-frame"} ref={ref}>

      <div className="iframe-header">
        <p>Please be patient as the file may take time to load. Thank You</p>
        <button type="button"  className="closebtn" onClick={changeDisplay}>
          &times;
        </button>
      </div>
      <embed
        title="Inline Frame Example"
        className={"iframe-display"}
        // src={Base_Url + url}>
        src = {`${Base_Url + url + "#toolbar=0"}`}>
      </embed>
    </div>) :
    <></>
  )
}
