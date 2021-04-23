import React, { FC, useContext, useEffect, useState } from 'react';
import AdminCardListComponent from '../../components/AdminCardListComponent';
import NotificationListComponent from '../../components/e-library/NotificationListComponent';
import Heading from '../../components/Heading';
import { AuthContext } from '../../context/AuthContext';
import DashboardStyles from '../../styles/DashboardStyles';
import { Modal, Button } from 'react-bootstrap'
import AddBookModal  from '../../components/AddBookModal';
import AddCategoryModal  from '../../components/AddCategoryModal';
import AddFolderModal  from '../../components/AddFolderModal';
import AddTagModal  from '../../components/AddTagModal';



 const getStaticProps = async () => {
  const res = await fetch(
    'http://102.130.127.119/api/RecentNotification/RecentNews',
    {
      method: 'GET',
      headers: {
        ApiKey:
          'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
      },
    },
  );
  const notifications = await res.json();

  return notifications
};

const MyBooks = () => {
  // const userData: any = useContext(AuthContext);
  // const user = userData[0].message;
  const [data, setdata] = useState([]);
  const [modalBookShow, setBookModalShow] = React.useState(false);
  const [modalFolderShow, setFolderModalShow] = React.useState(false);
  const [modalCategoryShow, setCategoryModalShow] = React.useState(false);
  const [modalTagShow, setTagModalShow] = React.useState(false);


  const user = JSON.parse(global.localStorage.getItem("user"));
  const userEmail = user.emailAddress
  const memberId = user.memberId

  useEffect(() => {
    (async ()=>{
      let data = await getStaticProps()
      setdata(data)
    })()
  }, [])
  return (
      <>
    <DashboardStyles className='wrapper'>
      <Heading heading='Quick Actions' />
      <div>
          <div>
              <p>&#8592; Back</p>
              <p>Manage Books</p>

          </div>
          <div>
              <button onClick={() => setFolderModalShow(true)}>Add Folder</button>
              <button onClick={() => setCategoryModalShow(true)}>Add Category</button>
              <button onClick={() => setTagModalShow(true)}>Add Tag</button>
              <button onClick={() => setBookModalShow(true)}>Add Book</button>
              
              
          </div>
      </div>
      {/* <AdminCardListComponent /> */}
      <Heading heading='E-Library Activities' />
      
      <NotificationListComponent response={data} />
    </DashboardStyles>
    <AddBookModal
                url={`http://102.130.127.119:80/api/Document/AddFile?memberId=${memberId}=${userEmail}`}
                show={modalBookShow}
                onHide={() => setBookModalShow(false)}
              />
    <AddFolderModal
                show={modalFolderShow}
                onHide={() => setFolderModalShow(false)}
              />
    <AddCategoryModal
                show={modalCategoryShow}
                onHide={() => setCategoryModalShow(false)}
              />
    <AddTagModal
                show={modalTagShow}
                onHide={() => setTagModalShow(false)}
              />
   </> 
  );
};

export default MyBooks;


