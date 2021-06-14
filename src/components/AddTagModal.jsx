import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AddFormModalStyle } from "../../src/styles/AdminAuthStyles";
import SuccessModal from "./SuccessModal";
import { useHistory } from "react-router-dom";

export default function AddTagModal(props) {
  const [tagName, setTagName] = useState("");
  const [state, setState] = useState(false);

  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(" http://localhost:5000/api/Tag/AddTag", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiKey:
          "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
      },
      body: JSON.stringify([
        {
          tagName: tagName,
        },
      ]),
    })
      .then((res) => res.json())
      .then((tagData) => {
        if (tagData.message) {
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
        name="tag"
        change={tagName}
        state={state}
        hide={() => {setState(!state)
        history.go(0)}}
        
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
              <p>New Tag</p>
              <button type="button" onClick={props.onHide} className="closebtn">
                &times;
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter Tag Name"
              onChange={(e) => setTagName(e.target.value)}
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
