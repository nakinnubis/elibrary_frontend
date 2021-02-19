import React, { useContext } from 'react';
import CardListComponent from '../../components/CardListComponent';
import NotificationListComponent from '../../components/e-library/NotificationListComponent';
import Heading from '../../components/Heading';
import { AuthContext } from '../../context/AuthContext';
import DashboardStyles from '../../styles/DashboardStyles';
export const getStaticProps = async () => {
  const res = await fetch(
    'http://46.101.62.161:5000/api/RecentNotification/RecentNews',
    {
      method: 'GET',
      headers: {
        ApiKey:
          'dc5210e2cffaed0fa05abd84645e412f099ac3533f8f6c3bdbb1be038b7dab3c',
      },
    },
  );
  const notifications = await res.json();

  return {
    props: {
      data: notifications,
    },
  };
};
const index = ({ data }) => {
  const userData = useContext(AuthContext);
  const user = userData[0].message;
  return (
    <DashboardStyles className='wrapper'>
      <Heading heading='Quick Actions' />
      <CardListComponent />
      <Heading heading='Recent Notifications' />
      <NotificationListComponent response={data} />
    </DashboardStyles>
  );
};

export default index;
