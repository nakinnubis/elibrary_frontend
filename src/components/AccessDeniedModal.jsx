import { Modal} from "react-bootstrap";
import { Link} from "react-router-dom";
import "../styles/modal.css";

export default function AccessDeniedModal(props) {
  

   return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="homemodalcard">
          <div className="modalcard-top">
        <h1>Access Denied</h1>
        <h5 onClick={props.onHide}>&times;</h5>
      </div>
        
        <p>Please Login <a href="https://members.nape.org.ng/auth/login/"><span className="link">Here</span></a></p>
        
        <p>Don't have an Account? Please contact <a href="https://members.nape.org.ng"><span className="link">NAPE</span></a></p>
      </div>
    </Modal>
  );
    



     
}
