import HeadingStyles from '../styles/HeadingStyles';
import SearchIcon from "../assets/search-icon.svg"


const Heading = ({ heading, handleChange }) => {
  return (
    <HeadingStyles>
      <div className="headerwrapper">
        <h1 className="headerTitle">{heading}</h1>
        <div className="d-flex bg-white float-right tableSearch">
          <img src={SearchIcon} alt="" />
          <input className="form-control search-input" type="search" placeholder="Search books, author, keywords" aria-label="Search" onChange={handleChange}/>

        </div>
      </div>
    </HeadingStyles>
  );
};

export default Heading;
