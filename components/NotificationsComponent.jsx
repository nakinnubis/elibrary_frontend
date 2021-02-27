import React from 'react';
import NotificationStyles from '../styles/NotificationStyles';
import Image from 'next/image';
import parse from 'html-react-parser';
const NotificationsComponent = ({ title, info, published }) => {
  if (info.includes('<br>')) {
    info = info.replace('<br>', '');
  }
  return (
    <NotificationStyles>
      <div className='news-wrapper'>
        <div className='header-wrapper'>
          <h3>{parse(title)}</h3>
        </div>
        <div className='content-wrapper'>{parse(info)}</div>
      </div>
      <div className='date-wrapper'>
        <p>{published}</p>
      </div>

      <div className='image-wrapper'>
        <Image src='/menu.svg' layout='fill' />
      </div>
    </NotificationStyles>
  );
};

export default NotificationsComponent;
