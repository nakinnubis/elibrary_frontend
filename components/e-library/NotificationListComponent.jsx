import React from 'react';
import NotificationListStyles from '../../styles/NotificationListStyles';
import NotificationsComponent from '../NotificationsComponent';

const NotificationListComponent = ({ response }) => {
  const notifications = response.data;
  return (
    <NotificationListStyles>
      {/* <NotificationsComponent />
      <NotificationsComponent />
      <NotificationsComponent />
      <NotificationsComponent /> */}
      {notifications.map((notification) => {
        return (
          <NotificationsComponent
            key={notification.published}
            title={
              notification.title.length > 70
                ? `${notification.title.substring(0, 70)}...`
                : notification.title
            }
            info={
              notification.info.length > 150
                ? `${notification.info.substring(0, 150)}...`
                : notification.info
            }
          />
        );
      })}
    </NotificationListStyles>
  );
};

export default NotificationListComponent;
