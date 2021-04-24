import { Table } from 'react-bootstrap'
import NotificationListStyles from '../styles/NotificationListStyles';
import { dateFunc } from "../helper/dateFormatter"


export const BookListComponent =(props)=>{
    const bookLists = props.data

    return(
        
            <NotificationListStyles>
                 <Table striped bordered hover>
                <thead>
                    <tr style={{border:"2px solid brown"}}>
                    <th>Book Id</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Date Created</th>
                    <th onClick={props.displayBook}>...</th>
                    </tr>
                </thead>
                
                <tbody>
                    {bookLists?.documents.map((bookList) => {
                        return(
                            
                            <tr key={bookList.documentid}>
                                <td>{bookList.documentid}</td>
                                <td>{bookList.title}</td>
                                <td>{bookList.active ?"Active":"Inactive" }</td>
                                <td>{dateFunc(bookList.uploadDate)}</td>
                                <td>...</td>
                            </tr>
                                
                            
                        )}
                    )}
                </tbody>
                </Table>


                {/* {notifications?.map((notification) => {
                    return(

                    )
                } */}
            </NotificationListStyles>
        
    )
}
