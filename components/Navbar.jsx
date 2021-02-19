import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthContext } from '../context/AuthContext';
import { NavbarContainer } from '../styles/NavbarContainer';
const Navbar = () => {
  const userData = useContext(AuthContext);
  const user = userData[0].message;
  const [dropdown, setDropdown] = useState(false);
  return (
    <NavbarContainer>
      <nav className='wrapper'>
        <Link href='https://nape.org.ng/'>
          <a>
            <div className='logo'>
              <Image src='/logo.svg' width='250' height='100' />
            </div>
          </a>
        </Link>

        <div className='profile-side'>
          <div className='profile-text'>
            <div className='profile-name'>
              <p
                onFocus={(e) => setDropdown(!dropdown)}
                onBlur={(e) => setDropdown(!dropdown)}
                tabIndex='0'
              >
                {' '}
                {user ? user.memberPeople[0].otherNames : 'Goodness Ibenema'}
              </p>
              <div className={`drop-down ${dropdown ? 'show' : 'hide'}`}>
                <ul>
                  <li>Settings</li>
                  <li>Change Password</li>
                  <li>Visit Website</li>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
            <div className='down-arrow'>
              <Image src='/down-arrow.svg' layout='fill' />
            </div>
          </div>
          <div className='profile-img'>
            <Image src='/profile-img.png' layout='fill' />
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
