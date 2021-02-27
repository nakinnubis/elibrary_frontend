import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthContext } from '../context/AuthContext';
import { NavbarContainer } from '../styles/NavbarContainer';
// import "../styles/HeaderStyles.module.css"
import { useWindowWidthAndHeight } from './CustomHooks';

const Navbar = () => {
  const userData = useContext(AuthContext);
  const user = userData[0].message;
  const [dropdown, setDropdown] = useState(false);

  // use our custom hook to get the the window size
  const [width] = useWindowWidthAndHeight();
  // declare 'translate' as a state variable
  let [translate, setTranslate] = useState(true);

  return (
    <NavbarContainer>
      { width > 920 ? <div className='wrapper nav'>
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
      </div>

        :

        <>
          <nav className='wrapper'>
            <Link href='https://nape.org.ng/'>
              <a>
                <div className='logo'>
                  <Image src='/logo.svg' width='250' height='100' />
                </div>
              </a>
            </Link>

            <div className='profile-side'>

              <div className='profile-hamburger' >
                <a className={`${translate ? "addTransitonColor" : "removeTransitionColor"} hamburger-btn nav-link`}
                  onClick={() => setTranslate(!translate)}>  {/* toggle translate */}
                  {/* change the btn text based on whether translate is true or false */}
                  {translate ? <span>&#9776;</span> : <span className="close-icon">X</span>}
                </a>
              </div>


              <div id="sidebar-list" className={`${translate ? "addTransiton" : "removeTransition"}`}>

                <div className="first-item pb-5">

                  {/* <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown button
  </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div> */}

                </div>

                <a href="/dashboard/dsgfh" className="block" onClick={() => setTranslate(!translate)}><span className="icon-cls"><Image src='/profile-icon.svg' width="20" height="20" /></span> My Profile</a>
                <a href="/dashboard/safdjg" className="block" onClick={() => setTranslate(!translate)}><span className="icon-cls"><Image src='/certificate.svg' width="20" height="20" /></span> Certificate</a>
                <a href="/dashboard/bdhjsgfh" className="block" onClick={() => setTranslate(!translate)}><span className="icon-cls"><Image src='/payments.svg' width="20" height="20" /></span> Pay History</a>
                <a href="/dashboard/bdhjsgfh" className="block" onClick={() => setTranslate(!translate)}><span className="icon-cls"><Image src='/online-payment.svg' width="20" height="20" /></span> Pay Online</a>
                <a href="/member-portal-elibrary" className="block" onClick={() => setTranslate(!translate)}><span className="icon-cls"><Image src='/e-library.svg' width="20" height="20" /></span> E-Library</a>
                <a href="/dashboard/bdhjsgfh" className="block" onClick={() => setTranslate(!translate)}><span className="icon-cls"><Image src='/member-card.svg' width="20" height="20" /></span> Member Card</a>
                <a href="/dashboard/bdhjsgfh" className="block" onClick={() => setTranslate(!translate)}><span className="icon-cls"><Image src='/election.svg' width="20" height="20" /></span> Election</a>
                <a href="/dashboard/bdhjsgfh" className="block" onClick={() => setTranslate(!translate)}><span className="icon-cls"><Image src='/resources.svg' width="20" height="20" /></span> Resources</a>

              </div>
              {/* <Link to="/blog" className="block" onClick={() => setTranslate(!translate)}>Blog</Link> */}

              {/* <Link to="/sign_in"><CtmButton bk="#44B3E5" paddingSize="0 3.5rem" style={{ color: '#fff' }} className="block" onClick={() => setTranslate(!translate)}>
                Login
            </CtmButton></Link> */}

            </div>
          </nav>
        </>}
    </NavbarContainer>
  );
};

export default Navbar;
