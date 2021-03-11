import { useEffect } from 'react'
import { useRef } from 'react'
import "../styles/iframe.css"

let Base_Url = "https://rockcodeafrica.org/"


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
      console.log("hiii")
      changeDisplay()
    }
  }

  return (display ?
    (<div className={"wrapper-frame"} ref={ref}>
      <embed
        title="Inline Frame Example"
        className={"iframe-display"}
        src={Base_Url + url}>
      </embed>
    </div>) :
    <></>
  )
}