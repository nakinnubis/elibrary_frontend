import { Modal } from "react-bootstrap";
import { AddFormModalStyle } from "../../src/styles/AdminAuthStyles";

export default function SuccessModal({ name, change, state, hide }) {
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
            <p>You have added a new {`${name}`}</p>
            <p>{change}</p>
          </div>
          <button type="button" onClick={hide}>
            Close
          </button>
        </div>
      </AddFormModalStyle>
    </Modal>
  );
}
