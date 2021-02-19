import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinkStyles from '../styles/NavLinkStyles';
const NavLinks = ({ name, imgUrl, url, active }) => {
  return (
    <Link href={url}>
      <a>
        <NavLinkStyles>
          <div className={`nav-links ${active}`}>
            <div className='nav-icon'>
              <Image src={imgUrl} layout='fill' />
            </div>
            <div className='nav-texts'>{name}</div>
          </div>
        </NavLinkStyles>
      </a>
    </Link>
  );
};

export default NavLinks;
