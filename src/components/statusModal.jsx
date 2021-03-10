import { useEffect } from 'react'
import { useRef } from 'react'
import "../styles/iframe.css"

// let Base_Url = "https://rockcodeafrica.org/"


export default function ModalViewer({ display = false, changeModalDisplay }) {
  let ref = useRef()
// 

  useEffect(() => {
    window.addEventListener('click', removeClick)
    return () => window.removeEventListener('click', removeClick)
  }, [])

  const removeClick = (e) => {
    console.log(e.target)
    console.log(ref.current)
    if (e.target !== ref.current) {
      console.log("modal hii")
      changeModalDisplay()
    }
  }

  return (display ?
    (<div className={"modalcard"} ref={ref}>
      
      {/* <embed
        type="text/html"
        title="Inline Frame Example"
        className={"iframe-display"}
        src="snippet.html"> */}
            {/* <h1>Oops!!!</h1> */}
      {/* </embed> */}
     <h1>Oops!!!</h1>
     <h2>You are not an active Member</h2>
     <h2>Please pay your annual dues <a href="#">here</a></h2>

    </div>) :
    <></>
  )
}
