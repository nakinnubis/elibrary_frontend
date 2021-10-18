import { Table } from "react-bootstrap";
import NotificationListStyles from "../styles/NotificationListStyles";
import { dateFunc } from "../helper/dateFormatter";
import "./styles.css";
import Menu from "../assets/menu.svg";
import { useState } from "react";



export const BookListComponentAdmin = (data) => {
  const bookLists = data.data || [];
  const [showDelete, setShowDelete] = useState(false)
  const [title, setTitle] = useState("") 

  return (
    <NotificationListStyles>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Date Created</th>
          </tr>
        </thead>

        <tbody>
          {bookLists?.map((bookList) => {
            // setTitle(bookList._source.title)
            return (
              <tr key={bookList.id}>
                <td>{bookList._source.title}</td>
                <td>{bookList._source.bookauthor}</td>
                <td>{bookList._source.active ? "Active" : "Inactive"}</td>
                <td>{dateFunc(bookList._source.uploaddate)}</td>
                <td>
                  <div class="dropdown">
                    <img src={Menu} alt="" class="dropbtn" />
                    <div class="dropdown-content">
                    </div>
                  </div>
                  
                </td>
                
              </tr>
            );
          })}
        </tbody>
      
      </Table>
    </NotificationListStyles>
    
  );
};
