import { useHistory } from "react-router-dom";
import "./styles.css";

export const ManageComponents = (props) => {
  let history = useHistory();

  return (
    <>
      <div className="header__container">
        {/* <div className="row"> */}
        <div className="header__container__left">
          <div
            onClick={() => {
              history.goBack();
            }}
            style={{ fontSize: "2rem", display: "flex", alignItems: "center", cursor:"pointer" }}
          >
            <span className="back__arrow">&#8592;</span>
            <span className="back__button">Back</span>
          </div>
          <p className="back__button__title">Manage Books</p>
        </div>
        <div className="add__button__container">
          <button className="add__button" onClick={props.openFolder}>
            <span className="add__button__span">&#x2B;</span>
            Add Folder
          </button>
          <button className="add__button" onClick={props.openCat}>
            <span className="add__button__span">&#x2B;</span>Add Category
          </button>
          <button className="add__button" onClick={props.openTag}>
            <span className="add__button__span">&#x2B;</span>Add Tag
          </button>
          <button className="add__button" onClick={props.openBook}>
            <span className="add__button__span">&#x2B;</span>Add Book
          </button>

          {/* </div> */}
        </div>
      </div>
    </>
  );
};
