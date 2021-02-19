import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BookInfoStyles from '../../styles/library-styles/BookInfoStyles';

const BookInfoCard = () => {
  return (
    <BookInfoStyles>
      <div className='hero-bg'>
        {/* <Image src='/book-bg.png' layout='fill' /> */}
        <Link href='/'>
          <a>Preview</a>
        </Link>
      </div>
      <div className='book-pricing-bg'>
        <div className='title-div'>
          <div>
            <p className='title'>NAPE Conference Schedule of Events_2018</p>
          </div>
          <div>
            <p>₦5000</p>
          </div>
        </div>
        <Link href='/dashboard'>
          <a className='book-flex'>
            <div className='start-reading-div'>
              <div
                style={{ width: '20px', height: '20px', position: 'relative' }}
              >
                <Image src='/book-icon.svg' layout='fill' />
              </div>
              <p>Start Reading</p>
            </div>
          </a>
        </Link>
      </div>
    </BookInfoStyles>
  );
};

export default BookInfoCard;
