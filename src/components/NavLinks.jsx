import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import NavLinkStyles from '../styles/NavLinkStyles';

const NavLinks = ({ name, imgUrl, url, active }) => {
  return (
    <Link to={url}>
      <NavLinkStyles>
        <div className={`nav-links ${active}`}>
          <div className='nav-icon'>
            <img src={imgUrl} />
          </div>
          <div className='nav-texts'>{name}</div>
        </div>
      </NavLinkStyles>
    </Link>
  );
};

export default NavLinks;
