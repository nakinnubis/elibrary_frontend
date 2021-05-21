import { useState, useEffect } from "react";

import { Modal, Button, Spinner } from "react-bootstrap";
import thumbnailIcon from "../assets/thumbnail-icon.svg";
import uploadIcon from "../assets/upload-icon.svg";
import { AddBookModalStyle } from "../../src/styles/AdminAuthStyles";

import CreatableSelect from "react-select/creatable";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

export default function AddBookModal(props) {
  const tagURL = " https://1b9c41ffd051.ngrok.io/api/Tag/GetAllGetTags";
  const folderURL = " https://1b9c41ffd051.ngrok.io/api/Folder/GetFolders";
  const catURL = " https://1b9c41ffd051.ngrok.io/api/Category/GetAllGetCategories";
  const accessURL = " https://1b9c41ffd051.ngrok.io/api/AccessLevel/GetAccessLevels";

  const [state, setState] = useState(false);

  const [uploaded, SetUploaded] = useState(false);

  const [book, setBook] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [folders, setfolders] = useState([]);
  const [folderValue, setfoldersValue] = useState(0);
  const [category, setCategory] = useState({ result: [] });
  const [categoryValue, setCategoryValue] = useState("");
  const [description, setDescription] = useState("");
  const [accessLevel, setAccessLevel] = useState(0);
  const [price, setPrice] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [tags, setTags] = useState([]);
  const [bookAuthor, setBookAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pubWebsite, setPubWebsite] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("");
  const [isActive, setIsActive] = useState(false);
  // const [user, setUser] = useState("admin");
  const [access, setAccess] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formTags, setformTags] = useState([]);
  const [docTag, setDocTag] = useState([]);
  const [publishYear, setPublishYear] = useState(0);
  const [fileFormat, setFileFormat] = useState(null);
  const [borrowPricing, SetBorrowPricing] = useState(0);
  const [option, setOption] = useState([]);

  const languageOptions = [
    { value: "English", label: "English" },
    { value: "French", label: "French" },
    { value: "Spanish", label: "Spanish" },
  ];

  const handleTagSubmit = (newValue) => {
    // const newData = newValue.map((tag) => tag.value);
    setformTags(newValue);
  };

  const handleFolderSubmit = (newValue) => {
    newValue && newValue && setfoldersValue(newValue.folderID);
  };

  const handleCategorySubmit = (newValue) => {
    newValue && setCategoryValue(newValue.categoryID);
  };

  const handleAccessSubmit = (newValue) => {
    newValue && setAccessLevel(newValue.accessLevel);
  };

  const handleLanguageSubmit = (newValue) => {
    newValue && setLanguage(newValue.value);
  };

  const createTags = (name) => {
    let newTags = {
      tagiD: null,
      tagName: name.label,
      documents: null,
      document: null,
    };
    return newTags;
  };

  const testOption = [
    { label: "thinking", value: "shame" },
    { label: "thinking", value: "shame" },
    { label: "thinking", value: "shame" },
    { label: "eating", value: "good" },
  ];
  const changeTagValue = (data) => {
    data["value"] = data["tagName"];
    data["label"] = data["tagName"];
    return data;
  };
  const changeFolderValue = (data) => {
    data["value"] = data["name"];
    data["label"] = data["name"];
    return data;
  };
  const changeCategoryValue = (data) => {
    data["value"] = data["name"];
    data["label"] = data["name"];
    return data;
  };
  const changeAccessValue = (data) => {
    data["value"] = data["accessLevelAllowedName"];
    data["label"] = data["accessLevelAllowedName"];
    return data;
  };

  const [{ alt, src }, setImg] = useState({
    src: thumbnailIcon,
    alt: "Upload Image",
  });

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setThumbnail(e.target.files[0])
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
      
      
    }
  };

  const fetchfolders = async () => {
    try {
      const response = await fetch(folderURL, {
        method: "GET",
        headers: {
          ContentType: "application/json",
          ApiKey:
            "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
        },
      });
      const folderResult = await response.json();
      const newData = folderResult.data.map(changeFolderValue);
      setfolders(newData);
      // console.log({folders})
    } catch (error) {
      // console.log(error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await fetch(catURL, {
        method: "GET",
        headers: {
          ContentType: "application/json",
          ApiKey:
            "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
        },
      });
      const categoryResult = await response.json();
      const newData = categoryResult.data.result.map(changeCategoryValue);
      setCategory(newData);
    } catch (error) {
      // console.log(error);
    }
  };

  const fetchAccess = async () => {
    try {
      const response = await fetch(accessURL, {
        method: "GET",
        headers: {
          ContentType: "application/json",
          ApiKey:
            "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
        },
      });
      let accessResult = await response.json();
      const newData = accessResult.data.map(changeAccessValue);
      setAccess(newData);
    } catch (error) {
      // console.log(error)
    }
  };

  const fetchTag = async () => {
    try {
      const response = await fetch(tagURL, {
        method: "GET",
        headers: {
          ContentType: "application/json",
          ApiKey:
            "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
        },
      });
      const tagResult = await response.json();
      const newData = tagResult.data.map(changeTagValue);

      setOption(newData);
    } catch (error) {
      // console.log(error);
    }
  };

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  // const newOption = option.data.map(changeTagValue)
  useEffect(() => {
    async function fetchData() {
      await fetchfolders();
      await fetchCategory();
      await fetchAccess();
      // let tester = formTags.map(createTags)
      // setDocTag(tester)
      await fetchTag();
      // console.log("inside useEffect",docTag)
      
      // let admin = JSON.parse(global.localStorage.getItem("admin"));
      // console.log(admin);
      // setUser(admin);
      // setUser(admin?.username);
      setLoading(false);
    }
    fetchData();
  }, []);

  // find new tag
  const filterNewTags = (tags) => {
    let newTag = [];
    for (const i in tags) {
      if (tags[i].hasOwnProperty("__isNew__")) {
        newTag.push(tags[i]);
      }
    }
    return newTag;
  };
  const tagUploadFormat = (tags) => {
    let tagToUpload = [];
    for (const i in tags) {
      if (tags[i].hasOwnProperty("__isNew__")) {
        //   // newTag.push(tags[i])
        //   console.log("before deleting", tags[i])
        //   delete tags[i].label
        //   tagToUpload.push(tags[i])
        //   console.log("after removing label", tags[i])
        // // }else{
        let newTags = {
          tagiD: null,
          tagName: tags[i].label,
          documents: null,
          document: null,
        };
        // console.log("iamhere",tags[i])
      }
      // console.log(tags[i])
    }

    return tagToUpload;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    // console.log(book)
    // console.log("inside submit",formTags)

    // if (loading) return;

    let newTags = filterNewTags(formTags);
    console.log("iamnewtag", newTags);

    let docs = {
      title: title,
      description: description,
      active: isActive,
      folderID: folderValue,
      userId: props.user,
      accessLevel: parseInt(accessLevel),
      Tags: formTags,
      categoryID: categoryValue,
      documentpricing: parseFloat(price),
      borrowPricing: parseFloat(borrowPricing),
      publisher: publisher,
      datePublished: date,
      publisherUrl: pubWebsite,
      isbn: isbn,
      bookAuthor: bookAuthor,
      language: language,
      fileFormat: fileFormat,
      publishYear: publishYear,
    };

    console.log(docs);
    const formdata = new FormData();
    formdata.append("file", book, book.name);
    formdata.append("Document", JSON.stringify(docs));

    formdata.append("img", thumbnail);

    var requestOptions = {
      method: "POST",
      body: formdata,
      headers: {
        ContentType: "application/json",
        ApiKey:
          "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
      },
    };

    const message = "File was successfully uploaded";

    fetch(props.url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("This is the result", result.message);

        if (result.message === message) {
          SetUploaded(!uploaded);
        }

        props.onHide();
        setState(!state);
      })
      .catch((error) => console.log("error", error));
  };

  const displayFolders = folders.map((folder) => {
    return (
      <option key={folder.folderID} value={folder.name}>
        {folder.name}
      </option>
    );
  });

  const style = {
    // control: (base) => ({
    //   ...base,
    //   // border: 0,
    //   // This line disable the blue border
    //   boxShadow: "none",
    //   // borderColor: "none"
    // }),
    control: (base, state) => ({
      ...base,
      // border: "1px solid #dbdbdb",
      border: "1px solid rgba(127,139,148,0.5)",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid rgba(127,139,148,0.5)",
      },
    }),
  };

  return (
    <>
      {uploaded ? (
        <SuccessModal
          name="book"
          change={book.name}
          state={state}
          hide={() => setState(!state)}
        />
      ) : (
        <ErrorModal
          name="File upload failed"
          state={state}
          hide={() => setState(!state)}
        />
      )}
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
              <button type="button" onClick={props.onHide} className="closebtn">
                &times;
              </button>
            </div>

            <div className="upload-doc">
              <input
                type="file"
                id="upload-doc"
                accept=".doc, .docx,.ppt, .pptx,.txt,.pdf"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setBook(e.target.files[0]);
                }}
                hidden
                required
              />
              <label htmlFor="upload-doc">
                <span className="upload-container">
                  <img className="upload-image" src={uploadIcon} alt="" />
                  <span className="upload-span">
                    {book ? book.name : "Upload Book"}
                  </span>
                </span>
              </label>
            </div>
            <div className="flex-apart upload-basics m-top">
              <div className="upload-img">
                <input
                  type="file"
                  id="upload-thumbnail"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleImg}
                  hidden
                />
                <label htmlFor="upload-thumbnail">
                  <img src={src} alt={alt} />
                  <p>{alt}</p>
                </label>
              </div>
              <div className="upload-basics-right">
                <div className="upload-basic-top">
                  <label htmlFor="title">Title</label>
                  <input
                    name="title"
                    className=""
                    type="text"
                    id="title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex-apart upload-basic-bottom m-top">
                  <div className="half-width">
                    <label htmlFor="folder">Folder</label>
                    <CreatableSelect
                      styles={style}
                      className="creatable-select"
                      // autoFocus={false}
                      blurInputOnSelect={false}
                      isClearable
                      onChange={handleFolderSubmit}
                      options={folders}
                      blur
                    />
                  </div>
                  <div className="half-width">
                    <label htmlFor="category">Category</label>
                    {/* <select
                      id="categories"
                      value={categoryValue}
                      onChange={(e) => setCategoryValue(e.target.value)}
                    >
                      {displayCategory}
                    </select> */}

                    <CreatableSelect
                      styles={style}
                      autoFocus={false}
                      isClearable
                      onChange={handleCategorySubmit}
                      options={category}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="description m-top">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex-apart m-top access-rights">
              <div className="half-width">
                <label htmlFor="access">Access Right</label>
                <CreatableSelect
                  styles={style}
                  autoFocus={false}
                  isClearable
                  onChange={handleAccessSubmit}
                  options={access}
                />
              </div>
              <div className="price">
                <label>Price</label>
                <div className=" price-switch">
                  <div className="flex-apart padded half-width price-switch-input">
                    <p className="small-text">is there price?</p>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          setIsChecked(!isChecked);
                          console.log(isChecked);
                        }}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className={`price-input ${isChecked ? "" : "hidden"}`}>
                    <input
                      type="number"
                      placeholder="0.00 NGN"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="tags m-top">
              <label htmlFor="tags">Tags</label>
              <CreatableSelect
                styles={style}
                autoFocus={false}
                isMulti
                onChange={handleTagSubmit}
                options={option}
              />
            </div>

            <div className="optional m-top">
              <p>Optional</p>
            </div>
            <div className="m-top book-details">
              <div className="flex-apart">
                <div className="half-width">
                  <label htmlFor="book-author">Book Author</label>
                  <input
                    className=""
                    type="text"
                    id="book-author"
                    onChange={(e) => setBookAuthor(e.target.value)}
                  />
                </div>
                <div className="half-width">
                  <label htmlFor="isbn">ISBN</label>
                  <input
                    type="text"
                    id="isbn"
                    onChange={(e) => setIsbn(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-apart m-top">
                <div className="half-width">
                  <label htmlFor="publisher">Publisher</label>
                  <input
                    type="text"
                    id="publisher"
                    onChange={(e) => setPublisher(e.target.value)}
                  />
                </div>
                <div className="half-width">
                  <label htmlFor="p-website">Publisher Website</label>
                  <input
                    type="text"
                    id="p-website"
                    onChange={(e) => setPubWebsite(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-apart m-top">
                <div className="half-width">
                  <label htmlFor="p-date">Publication Date</label>
                  <input
                    type="date"
                    id="p.date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="half-width">
                  <label>Language</label>
                  <CreatableSelect
                    styles={style}
                    autoFocus={false}
                    isClearable
                    onChange={handleLanguageSubmit}
                    options={languageOptions}
                  />
                </div>
              </div>
            </div>
            <div className="form-footer m-top">
              <button type="button" onClick={props.onHide} className="white-bg">
                Cancel
              </button>
              {/* <button type="submit" >
                Create
              </button> */}
              <Button variant="primary" disabled={loading} type="submit"
              className="green-bg">
                {loading && (
                  <Spinner
                    type="submit"
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {`${loading ? "Uploading..." : "Create"}`}
              </Button>
            </div>
          </form>
        </AddBookModalStyle>
      </Modal>
    </>
  );
}
