import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AddFormModalStyle } from "../../src/styles/AdminAuthStyles";
import SuccessModal from "./SuccessModal";

export default function AddCategoryModal(props) {
  const [CategoryName, setCategoryName] = useState("");
  const [description, setDescriptionName] = useState("");
  const [state, setState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://102.130.127.119:80/api/Category/CreateCategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiKey:
          "dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c",
      },
      body: JSON.stringify([
        {
          Name: CategoryName,
          Description: description,
        },
      ]),
    })
      .then((res) => res.json())
      .then((CategoryData) => {
        if (CategoryData) {
          props.onHide();
          setState(!state)
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <SuccessModal
        name={"category"}
        change={CategoryName}
        state={state}
        hide={()=>setState(!state)}
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
              <p>New Category</p>
              <button type="button" onClick={props.onHide} className="closebtn">
                &times;
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter Category Name"
              onChange={(e) => setCategoryName(e.target.value)}
              className="form-input"
              required
            />
            <input
              type="text"
              placeholder="Enter Description"
              onChange={(e) => setDescriptionName(e.target.value)}
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
