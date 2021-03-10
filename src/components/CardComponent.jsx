import React, { FC } from 'react';
import CardComponentStyles from '../styles/CardComponentStyles';


const CardComponent = ({ img, title }) => {
  return (
    <CardComponentStyles>
      <div className='card-content'>
        <div className='card-image'>
          <img src={img} />
        </div>
        <p>{title}</p>
      </div>
    </CardComponentStyles>
  );
};

export default CardComponent;
