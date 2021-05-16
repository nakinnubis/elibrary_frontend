import { Table } from "react-bootstrap";
import NotificationListStyles from "../styles/NotificationListStyles";
import { dateFunc } from "../helper/dateFormatter";
import "./styles.css";
import Menu from "../assets/menu.svg";

export const BookListComponentAdmin = (data) => {
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
              <tr key={bookList.id}>
                <td>{bookList._id}</td>
                <td>{bookList._source.title}</td>
                <td>{bookList._source.active ? "Active" : "Inactive"}</td>
                <td>{dateFunc(bookList._source.uploaddate)}</td>
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
