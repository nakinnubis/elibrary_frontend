import { Table } from "react-bootstrap";
import NotificationListStyles from "../styles/NotificationListStyles";
import { dateFunc } from "../helper/dateFormatter";
import "./styles.css";
import Menu from "../assets/menu.svg";

export const BookListComponent = (data) => {
  const bookLists = data.data || [];
  return (
    <NotificationListStyles>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date Created</th>
          </tr>
        </thead>

        <tbody>
          {bookLists?.map((bookList) => {
            return (
              <tr key={bookList.documentid}>
                <td>{bookList.documentid}</td>
                <td>{bookList.title}</td>
                <td>{bookList.active ? "Active" : "Inactive"}</td>
                <td>{dateFunc(bookList.uploadDate)}</td>
                <td>
                  <img src={Menu} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </NotificationListStyles>
  );
};
