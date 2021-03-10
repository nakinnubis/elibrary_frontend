import React from 'react';

import BookInfoCardList from '../../components/e-library/BookInfoCardList';
import LibraryInfo from '../../components/e-library/LibraryInfo';
import LibraryStyles from '../../styles/library-styles/LibraryStyles';

const library = () => {
  return (
    <LibraryStyles>
      <div className='wrapper'>
        <LibraryInfo />
        <p className='pagination-info'>Showing 1- 100 of 1000 books</p>
        <BookInfoCardList />
      </div>
    </LibraryStyles>
  );
};

export default library;
