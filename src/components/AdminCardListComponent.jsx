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
    <Link to="/admin-dashboard/manage-books">
      <AdminCardComponent img={Directory} title='Manage Books' />
    </Link>
      {/* <AdminCardComponent img={Access} title='Access Bulletin' /> */}
      {/* <CardComponent img={News} title='NAPE news' /> */}
    </CardListStyles>
  );
};

export default AdminCardListComponent;
