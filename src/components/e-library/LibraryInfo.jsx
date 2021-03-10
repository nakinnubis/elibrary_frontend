import LibraryInfoStyles from '../../styles/library-styles/LibraryInfoStyles';

const LibraryInfo = () => {
  return (
    <LibraryInfoStyles>
      <div className='input-div'>
        <input type='text' placeholder='Search books, author, keywords' />
      </div>
      <div className='info-tags'>
        <div className='green-bg'>
          <p>Books</p>
        </div>
        <div className='white-bg'>
          <p>Categories</p>
        </div>
        <div className='white-bg'>
          <p>Author</p>
        </div>
        <div className='no-bg'>
          <p>English</p>
        </div>
        <div className='no-bg'>
          <p>Format</p>
        </div>
      </div>
    </LibraryInfoStyles>
  );
};

export default LibraryInfo;
