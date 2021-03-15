import { useEffect } from 'react'
import { useRef } from 'react'
import "../styles/modal.css"

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
      <div className={"modalcard-top"}>
        <h1>Why don’t I have access to this book?</h1>
        <h5>X</h5>
      </div>
      <p>This is because your membership Subscription is due. Please pay your annual dues to continue reading.<br></br>Thank You</p>
     

    </div>) :
    <></>
  )
}
