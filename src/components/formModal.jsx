import { render } from '@testing-library/react';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap'



export default function FormViewer (){

    


    const [selectedFile, setSelectedFile] = useState([])
    const [fileBase64, setFileBase64] = useState([])
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    // const [baseString, setBaseString] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault();
        const upload = await fetch("http://46.101.62.161:5000/api/Library/Upload", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "ApiKey": "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
        },
        body: JSON.stringify({
            title: title,
            author : author,
            publisher: "NAPE",
            publishYear: 0,
            tag: "Public",
            documentBase64String: fileBase64
        })
        })
        const uploadData = await upload.json();
        if (uploadData.status === 200) {
    //   setUser(userData.message);
    //   setMemberStatus(userStatusData.message)
    //   window.localStorage.setItem("memStatus", JSON.stringify(userStatusData.message))
    //   window.localStorage.setItem("user",JSON.stringify(userData.message))
    //   setLoading(false)
      console.log("sucess: ", uploadData)
    //   console.log("hhhhh", userStatusData)
    //   push("/dashboard");
    } else if (uploadData.status === 404) {
    //   setLoading(false)
    //   setIsError(true);
        console.log('something went wrong')
    } else {
    //   setLoading(false);
    //   setIsError(true);
    console.log('badrequest')
    }
 }
    const onFileChange =(e) => {
        setSelectedFile(e.target.files)
        setTitle(e.target.files[0].name)
        console.log(e.target.files)
    }
    const onSubmitName = (e) =>{
        setAuthor(e.target.value)
        console.log(author) 
    }  
    const encodeFileBase64 =(file)=>{
        // let file = selectedFile[0]
        // console.log(e.target.files)
        let reader = new FileReader();
        if(file){
            
            reader.readAsDataURL(file);
            reader.onload = () => {
                let Base64 = reader.result;
                console.log("success", Base64)
                setFileBase64(Base64)
            };
            reader.onerror = (error) => {
                console.log("error: ",error)
            }
        }
    }
    encodeFileBase64(selectedFile[0])
    
    // aswedrftghyj.......................................

    //     <div class="main-block">
    //   <div class="left-part">
    //     <i class="fas fa-graduation-cap"></i>
    //     <h1>Register to our courses</h1>
    //     <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p>
    //     <div class="btn-group">
    //       <a class="btn-item" href="https://www.w3docs.com/learn-html.html">Learn HTML</a>
    //       <a class="btn-item" href="https://www.w3docs.com/quiz/#">Select Quiz</a>
    //     </div>
    //   </div>
    //   <form action="/">
    //     <div class="title">
    //       <i class="fas fa-pencil-alt"></i> 
    //       <h2>Register here</h2>
    //     </div>
    //     <div class="info">
    //       <input class="fname" type="text" name="name" placeholder="Full name">
    //       <input type="text" name="name" placeholder="Email">
    //       <input type="text" name="name" placeholder="Phone number">
    //       <input type="password" name="name" placeholder="Password">
    //       <select>
    //         <option value="course-type" selected>Course type*</option>
    //         <option value="short-courses">Short courses</option>
    //         <option value="featured-courses">Featured courses</option>
    //         <option value="undergraduate">Undergraduate</option>
    //         <option value="diploma">Diploma</option>
    //         <option value="certificate">Certificate</option>
    //         <option value="masters-degree">Masters degree</option>
    //         <option value="postgraduate">Postgraduate</option>
    //       </select>
    //     </div>
    //     <div class="checkbox">
    //       <input type="checkbox" name="checkbox"><span>I agree to the <a href="https://www.w3docs.com/privacy-policy">Privacy Poalicy for W3Docs.</a></span>
    //     </div>
    //     <button type="submit" href="/">Submit</button>
    //   </form>
    // </div>
    // anfbsvfjhfghergfkejrhgfgeghjgfhjqgfjkrkeegjfe................................
    return (
        <>
        <Modal.Header closeButton>
            Select
        </Modal.Header>

        <Modal.Body>

        {/* <div class="main-block"> */}
                    {/* <div class="left-part">
                        <i class="fas fa-graduation-cap"></i>
                        <h1>Register to our courses</h1>
                        <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p>
                        <div class="btn-group">
                        <a class="btn-item" href="https://www.w3docs.com/learn-html.html">Learn HTML</a>
                        <a class="btn-item" href="https://www.w3docs.com/quiz/#">Select Quiz</a>
                        </div>
                    </div>
                    <form action="/">
                        <div class="title">
                        <i class="fas fa-pencil-alt"></i> 
                        <h2>Register here</h2>
                        </div>
                        <div class="info">
                        <input class="fname" type="text" name="name" placeholder="Full name">
                        <input type="text" name="name" placeholder="Email">
                        <input type="text" name="name" placeholder="Phone number">
                        <input type="password" name="name" placeholder="Password">
                        </div>
                        <div class="checkbox">
                        <input type="checkbox" name="checkbox"><span>I agree to the <a href="https://www.w3docs.com/privacy-policy">Privacy Poalicy for W3Docs.</a></span>
                        </div>
                        <button type="submit" href="/">Submit</button>
                    </form>
                        </div> */}





             <div class="main-block">
                 <div class="left-part">
                    <i class="fas fa-graduation-cap"></i>
                        <h1>Register to our courses</h1>
                        <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p>
                        <div class="btn-group">
                        <a class="btn-item" href="https://www.w3docs.com/learn-html.html">Learn HTML</a>
                        <a class="btn-item" href="https://www.w3docs.com/quiz/#">Select Quiz</a> 
                        </div>
                 </div>
                 <form onSubmit={handleSubmit} >

                     <div class="title">
                        <i class="fas fa-pencil-alt"></i> 
                        <h2>Register here</h2>
                        </div>
                         
                {/* <input type="file" id="book" multiple accept=".doc, .docx, .pdf" onChange={onFileChange} />
                <br/>
                <input type="text" id = "author" placeholder="enter author's name" onChange={onSubmitName} value={author}/>
                <input type="submit" value="Submit"/>  */}
            </form>
             </div>
        </Modal.Body>
        </>
    )
}