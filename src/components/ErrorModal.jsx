import { Modal } from "react-bootstrap";
import { AddFormModalStyle } from "../styles/AdminAuthStyles";

export default function ErrorModal({ name, change, state, hide }) {
  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={state}
      onHide={hide}
    >
      <AddFormModalStyle>
        <div className="success-modal">
          <div className="info">
            <p>{name}</p>
          </div>
          <button type="button" onClick={hide}>
            Close
          </button>
        </div>
      </AddFormModalStyle>
    </Modal>
  );
}
