import React, { useContext, useState, useEffect, useRef } from 'react';
import ReactTags from 'react-tag-autocomplete';
import { Modal, Button, Form, Col} from 'react-bootstrap'
import thumbnailIcon from '../assets/thumbnail-icon.svg'
import uploadIcon from '../assets/upload-icon.svg'
import { AddBookModalStyle} from '../../src/styles/AdminAuthStyles';

import CreatableSelect from 'react-select/creatable';






export default function AddBookModal(props) {
  const tagURL ="http://102.130.127.119:80/api/Tag/GetAllGetTags";
  const folderURL = "http://102.130.127.119:80/api/Folder/GetFolders";
  const catURL = "http://102.130.127.119:80/api/Category/GetAllGetCategories";
  const accessURL ="http://102.130.127.119:80/api/AccessLevel/GetAccessLevels";



  const [ book, setBook ] =  useState("");
  const [ thumbnail, setThumbnail ] = useState("");
  const [ title, setTitle ] = useState("");
  const [ folders, setfolders ] = useState([]);
  const [ folderValue, setfoldersValue ] = useState(0);
  const [ category, setCategory ] = useState({result: []});
  const [ categoryValue, setCategoryValue ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ accessLevel, setAccessLevel ] = useState(0);
  const [ price, setPrice ] = useState("");
  const [ isChecked, setIsChecked] = useState(false);
  const [ tags, setTags ] = useState([]);
  const [ bookAuthor, setBookAuthor ] = useState("");
  const [ isbn, setIsbn ] = useState("");
  const [ publisher, setPublisher ] = useState("");
  const [ pubWebsite, setPubWebsite] = useState("");
  const [ date, setDate ] = useState("");
  const [ language, setLanguage ] = useState("");
  const [ isActive, setIsActive ] = useState(false)
  const [ user, setUser ] = useState("admin")
  const [access, setAccess ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [formTags, setformTags] = useState([]);
  const [docTag, setDocTag] = useState([]);
  const [publishYear, setPublishYear] = useState(0);
  const [fileFormat, setFileFormat] = useState(null);
  const [borrowPricing, SetBorrowPricing ] = useState(0);
  const [option, setOption ] = useState([]);
 
const handleTagSubmit=(newValue, actionMeta)=>{
    setformTags(newValue)
    // console.log(option)
    // console.log("inside handetag",formTags)
}
  

  const createTags=(name)=>{
    let newTags ={"tagiD":null,"tagName": name.label,"documents": null,"document": null}
    return newTags
  
  }
  
const testOption = [{label:"thinking", value:"shame"}, {label:"thinking", value:"shame"},{label:"thinking", value:"shame"},{label:"eating",value:"good" }]
const changeKeyValue = (data)=>{
    // data["value"] = data["tagID"];
    data["label"] = data["tagName"];
    // delete (data["tagID"], data["tagName"])
    // console.log("inside change key",data)
    return data;
  }


  const fetchfolders = async()=> {
    try{
      const response = await fetch(folderURL, {
            method: 'GET',
            headers: {
                ContentType: 
                    'application/json',
                ApiKey:
                    'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
            },
        });
        const folderResult = await response.json()
      setfolders(folderResult.data);
      // console.log({folders})
    } catch(error){
      // console.log(error);
    }
  };

  const fetchCategory = async()=> {
    try{
      const response = await fetch(catURL, {
            method: 'GET',
            headers: {
                ContentType: 
                    'application/json',
                ApiKey:
                    'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
            },
        });
        const categoryResult = await response.json()
      setCategory(categoryResult.data);
      // console.log({category});
    } catch(error){
      // console.log(error);
    }
  };

  const fetchAccess = async()=> {
    try{
      const response = await fetch(accessURL, {
            method: 'GET',
            headers: {
                ContentType: 
                    'application/json',
                ApiKey:
                    'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
            },
        });
        let accessResult = await response.json()
      setAccess(accessResult.data);
      // console.log({access});
    } catch(error){
      // console.log(error)
    }
  };

  const fetchTag = async()=> {
    try{
      const response = await fetch(tagURL, {
            method: 'GET',
            headers: {
                ContentType: 
                    'application/json',
                ApiKey:
                    'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
            },
        });
        const tagResult = await response.json()
      setOption(tagResult.data.map(changeKeyValue));
      // setOption(tagResult);
      // console.log("inside fetchtag",option);
    } catch(error){
      // console.log(error);
    }
  };
  
  // const newOption = option.data.map(changeKeyValue)
  useEffect(async ()=>{
    
    await fetchfolders();
    await fetchCategory();
    await fetchAccess();
    // let tester = formTags.map(createTags)
    // setDocTag(tester)
    await fetchTag();
    // console.log("inside useEffect",docTag)
    let admin =(JSON.parse(global.localStorage.getItem("admin")));    
    setUser(admin.username)
    setLoading(false)
  }, []);

// find new tag
const filterNewTags=(tags)=>{
  let newTag = []
  for (const i in tags){
      if(tags[i].hasOwnProperty("__isNew__")){
        newTag.push(tags[i])
      }
  }
  return newTag
}
const tagUploadFormat=(tags)=>{
    let tagToUpload = []
    for (const i in tags){
      
      if(tags[i].hasOwnProperty("__isNew__")){
      //   // newTag.push(tags[i])
      //   console.log("before deleting", tags[i])
      //   delete tags[i].label
      //   tagToUpload.push(tags[i])
      //   console.log("after removing label", tags[i])
      // // }else{
        let newTags ={"tagiD":null,"tagName": tags[i].label,"documents": null,"document": null}
        // console.log("iamhere",tags[i])
      }
      // console.log(tags[i])
    }
    
    return tagToUpload
  }


const handleSubmit = async (e) => {
    e.preventDefault(); 
    // console.log(book)
    // console.log("inside submit",formTags)
    
    if (loading) return;
    
    let newTags = filterNewTags(formTags)
    console.log("iamnewtag",newTags)

  let docs = {
      
  "title": title,
  "description":description,
  "active": isActive,
  "folderID": folderValue,
  "userId":user,
  "accessLevel": parseInt(accessLevel),
  "Tags": formTags
  ,
  "categoryID": categoryValue,
  "documentpricing": parseFloat(price),
  "borrowPricing":parseFloat(borrowPricing),
  "publisher": publisher,
  "datePublished": date,
  "publisherUrl": pubWebsite,
  "isbn": isbn,
  "bookAuthor": bookAuthor,
  "language": language,
  "fileFormat": fileFormat,
  "publishYear": publishYear
  
  }
  
  console.log(docs)
  const formdata = new FormData();
  formdata.append("file", book, book.name);
  formdata.append("Document", JSON.stringify(docs));

  formdata.append("img", thumbnail)

  // console.log(formdata.get("gggg"))
  var requestOptions = {
    method: 'POST',
     body: formdata,
  // redirect: 'follow'
};


fetch(props.url, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
  

  const displayFolders = folders.map(folder=>{
    return (
        <option key={folder.folderID} value={folder.folderID}>{folder.name}</option>
        
  )})

  const displayCategory = category.result.map(cat=>{
    return (
        <option key={cat.categoryID} value={cat.categoryID}>{cat.name}</option>
        
  )})

  const displayAccess = access.map(acc=>{
    return (
        <option key={acc.accessLevelAllowedID} value={acc.accessLevel}>{acc.accessLevelAllowedName}</option>
        
  )})

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <AddBookModalStyle>
        <form onSubmit={handleSubmit}>
        <div className="form-header">
          <p>New Book</p>
          <button type="button" onClick={props.onHide} className="closebtn">X</button>
        </div>
        
          
          <div className="upload-doc">
            
            <input  type="file" id="upload-doc" accept=".doc, .docx,.ppt, .pptx,.txt,.pdf" onChange={(e) =>{ console.log(e.target.files[0]);setBook(e.target.files[0])}} hidden/>
            <label htmlFor="upload-doc"><img className="upload-image" src={uploadIcon} alt=""/><span className="upload-span">{book ? book.name:"Upload Book"}</span></label>

          </div>
          <div className="flex-apart upload-basics m-top">
            <div className="upload-img">
    
              <input type="file" class="custom-file-input" id="upload-thumbnail" class="upload-thumbnail" accept="image/*" onChange={(e) => {setThumbnail(e.target.files[0]); console.log("thumbnail", thumbnail)}} hidden/> 
              <label htmlFor="upload-thumbnail"><img src={thumbnail ? "": thumbnailIcon} alt=""/><p>Upload Image</p></label>
            </div>
            <div className="upload-basics-right">
              <div className="upload-basic-top">
                <label htmlFor="title">Title</label>
                <input name="title" className="" type="text" id="title" onChange={(e) => {setTitle(e.target.value); console.log(title)}}required/>
              </div>
              <div className="flex-apart upload-basic-bottom m-top">
                <div className="half-width">
                  <label htmlFor="folder">Folder</label>
                  <select id="folders" value={folderValue} onChange={(e) => {setfoldersValue(e.target.value); console.log(folderValue)}}>
                    {displayFolders}
                  </select>
                </div>
                <div className="half-width">
                  <label htmlFor="category">Category</label>
                  <select id="categories" value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)}>
                    {displayCategory}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="description m-top">
            <label htmlFor="description">Description</label>
            <textarea id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="flex-apart m-top">
            <div className="half-width">
              <label htmlFor="access">Access Right</label>
              <select  id="access" value={accessLevel} onChange={(e) => setAccessLevel(e.target.value)}>
                {displayAccess}
              </select>
            </div>
            <div className="price">
              <p>Price</p>
              <div className="flex-apart">
                <div className="flex-apart padded half-width">
                  <p className="small-text">is there price?</p>
                  <label class="switch">
                    <input type="checkbox" onChange={(e) => {setIsChecked(!isChecked); console.log(isChecked)}}/>
                    <span class="slider round"></span>
                  </label>
                  
                </div>
                <div className={isChecked ? "": "hidden"}>
                  <input type="number" placeholder="0.00 NGN" onChange={(e) => setPrice(e.target.value)}/><span>NGN</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tags m-top"> 
             <label htmlFor="tags">Tags</label>
             <CreatableSelect
                isMulti
                onChange={handleTagSubmit}
                // options= {newOption}
                options= {option}

              />

             
          </div>
         
          <div className="optional m-top">
            <p>Optional</p>
          </div>
          <div className="m-top">
            <div className="flex-apart">
              <div className="half-width">
                <label htmlFor="book-author">Book Author</label>
                <input ClassName="" type="text" id="book-author"onChange={(e) => setBookAuthor(e.target.value)} />
              </div>
              <div className="half-width">
                <label htmlFor="isbn">ISBN</label>
                <input type="text" id="isbn" onChange={(e) => setIsbn(e.target.value)}/>
              </div>
            </div>
            <div className="flex-apart m-top">
              <div className="half-width">
                <label htmlFor="publisher">Publisher</label>
                <input type="text" id="publisher" onChange={(e) => setPublisher(e.target.value)} />
              </div>
              <div className="half-width">
                <label htmlFor="p-website">Publisher Website</label>
                <input type="text" id="p-website" onChange={(e) => setPubWebsite(e.target.value)}/>
              </div>
            </div>
            <div className="flex-apart m-top">
              <div className="half-width">
                <label htmlFor="p-date">Publication Date</label>
                <input type="date" id="p.date" onChange={(e) => setDate(e.target.value)}/>
              </div>
              <div className="half-width">
                <label htmlFor="language">Language</label>
                <select  id="language" onChange={(e) => {setLanguage(e.target.value); console.log(language)}}>
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-footer m-top">
            <button type="button" onClick={props.onHide} className="white-bg">Cancel</button>
            <button type="submit" className="green-bg">Create</button>
          </div>
          
        </form>
      </AddBookModalStyle>
    </Modal>
  );
}