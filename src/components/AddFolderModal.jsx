import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AddFormModalStyle } from "../../src/styles/AdminAuthStyles";
import SuccessModal from "./SuccessModal";

export default function AddFolderModal(props) {
  const [folderName, setFolderName] = useState("");
  const [state, setState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(" https://1b9c41ffd051.ngrok.io/api/Folder/NewFolder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiKey:
          "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
      },
      body: JSON.stringify({
        name: folderName,
      }),
    })
      .then((res) => res.json())
      .then((folderData) => {
        if (folderData.message) {
          props.onHide();
          setState(!state);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <SuccessModal
        name={"folder"}
        change={folderName}
        state={state}
        hide={() => setState(!state)}
      />
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <AddFormModalStyle>
          <form onSubmit={handleSubmit}>
            <div className="form-header">
              <p>New Folder</p>
              <button type="button" onClick={props.onHide} className="closebtn">
                &times;
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter Folder Name"
              onChange={(e) => setFolderName(e.target.value)}
              className="form-input"
              required
            />

            <div className="form-footer">
              <button type="button" onClick={props.onHide} className="white-bg">
                Cancel
              </button>
              <button type="submit" className="green-bg">
                Create
              </button>
            </div>
          </form>
        </AddFormModalStyle>
      </Modal>
    </>
  );
}
