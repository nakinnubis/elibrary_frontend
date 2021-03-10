import React from 'react';
import BookCardListStyles from '../../styles/library-styles/BookCardListStyles';
import BookInfoCard from './BookInfoCard';

const BookInfoCardList = () => {
  return (
    <BookCardListStyles>
      <BookInfoCard />
      <BookInfoCard />
      <BookInfoCard />
      <BookInfoCard />
      <BookInfoCard />
      <BookInfoCard />
      <BookInfoCard />
      <BookInfoCard />
    </BookCardListStyles>
  );
};

export default BookInfoCardList;
