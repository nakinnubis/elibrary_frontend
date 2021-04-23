import {useState} from 'react';
import { Modal} from 'react-bootstrap'
import { AddFormModalStyle} from '../../src/styles/AdminAuthStyles'





export default function AddFolderModal(props) {
    const [folderName, setFolderName] = useState("")

    const handleSubmit = async (e) => {
    e.preventDefault(); 
    fetch("http://102.130.127.119:80/api/Folder/NewFolder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ApiKey": "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
      },
      body: JSON.stringify({
        name: folderName
      })
    }).then(res => res.json()).then(folderData => {
   
        if (folderData.message){
            alert(folderData.message)
        }

    }).catch(err => { console.log({err})})}
    
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <AddFormModalStyle>
            <form onSubmit={handleSubmit} >
                <div className="form-header">
                    <p>New Folder</p>
                    <button type="button" onClick={props.onHide} className="closebtn">X</button>
                </div>

                <input type="text" placeholder="Enter Folder Name" onChange={(e) => setFolderName(e.target.value)}className="form-input" required />
            
            <div className="form-footer">
                <button type="button" onClick={props.onHide} className="white-bg">Cancel</button>
                <button type="submit" className="green-bg">Create</button>
            </div>
            </form>
        </AddFormModalStyle>
    </Modal>
  );
    }
