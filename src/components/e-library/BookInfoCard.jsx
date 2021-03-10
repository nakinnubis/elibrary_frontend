import { Link } from "react-router-dom";
import BookInfoStyles from "../../styles/library-styles/BookInfoStyles";
import Bookicon from '../../assets/book-icon.svg';


const BookInfoCard = () => {
  return (
    <BookInfoStyles>
      <div className="hero-bg">
        {/* <img src='/book-bg.png' layout='fill' /> */}
        <Link to="/">Preview</Link>
      </div>
      <div className="book-pricing-bg">
        <div className="title-div">
          <div>
            <p className="title">NAPE Conference Schedule of Events_2018</p>
          </div>
          <div>
            <p>₦5000</p>
          </div>
        </div>
        <Link to="/dashboard" className="book-flex">
          <div className="start-reading-div">
            <div
              style={{ width: "20px", height: "20px", position: "relative" }}
            >
              <img src={Bookicon} />
            </div>
            <p>Start Reading</p>
          </div>
        </Link>
      </div>
    </BookInfoStyles>
  );
};

export default BookInfoCard;
