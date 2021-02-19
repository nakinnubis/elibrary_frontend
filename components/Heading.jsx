import React from 'react';
import HeadingStyles from '../styles/HeadingStyles';
const Heading = ({ heading }) => {
  return (
    <HeadingStyles>
      <h1>{heading}</h1>
    </HeadingStyles>
  );
};

export default Heading;
