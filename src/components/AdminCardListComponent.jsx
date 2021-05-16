import React from 'react';
import CardListStyles from '../styles/CardListStyles';
import AdminCardComponent from './AdminCardComponent';
import Cash from '../assets/cash.svg';
import { Link } from 'react-router-dom';
import Directory from '../assets/directory.svg';
import Access from '../assets/access.svg';
import News from '../assets/news.svg';


const AdminCardListComponent = () => {
  return (
    <CardListStyles>
      <AdminCardComponent img={Cash} title='Manage Member' />
      <AdminCardComponent img={Directory} title='Manage Books' link = "/admin-dashboard/manage-books" />

    </CardListStyles>
  );
};

export default AdminCardListComponent;
