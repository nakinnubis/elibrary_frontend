import React from 'react';
import CardListStyles from '../styles/CardListStyles';
import CardComponent from './CardComponent';

const CardListComponent = () => {
  return (
    <CardListStyles>
      <CardComponent img='/cash.svg' title='Pay Dues' />
      <CardComponent img='/directory.svg' title='Members Directory' />
      <CardComponent img='/access.svg' title='Access Bulletin' />
      <CardComponent img='/news.svg' title='NAPE news' />
    </CardListStyles>
  );
};

export default CardListComponent;
