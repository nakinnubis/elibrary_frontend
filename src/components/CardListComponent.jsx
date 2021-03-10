import React from 'react';
import CardListStyles from '../styles/CardListStyles';
import CardComponent from './CardComponent';
import Cash from '../assets/cash.svg';
import Directory from '../assets/directory.svg';
import Access from '../assets/access.svg';
import News from '../assets/news.svg';

const CardListComponent = () => {
  return (
    <CardListStyles>
      <CardComponent img={Cash} title='Pay Dues' />
      <CardComponent img={Directory} title='Members Directory' />
      <CardComponent img={Access} title='Access Bulletin' />
      <CardComponent img={News} title='NAPE news' />
    </CardListStyles>
  );
};

export default CardListComponent;
