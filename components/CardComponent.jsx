import React from 'react';
import CardComponentStyles from '../styles/CardComponentStyles';
import Image from 'next/image';
const CardComponent = ({ img, title }) => {
  return (
    <CardComponentStyles>
      <div className='card-content'>
        <div className='card-image'>
          <Image src={img} layout='fill' />
        </div>
        <p>{title}</p>
      </div>
    </CardComponentStyles>
  );
};

export default CardComponent;
