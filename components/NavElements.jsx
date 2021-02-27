import React from 'react';
import NavElementsContainer from '../styles/NavElementsContainer';
import NavLinks from './NavLinks';
import { useRouter } from 'next/router';
const NavElements = () => {
  const navdata = [
    {
      id: 1,
      imgUrl: '/dashboard.svg',
      name: 'Dashboard',
      url: '/dashboard',
    },
    {
      id: 2,
      imgUrl: '/profile-icon.svg',
      name: 'Profile',
      url: '/dashboard/dsgfh',
    },
    {
      id: 3,
      imgUrl: '/certificate.svg',
      name: 'certificate',
      url: '/dashboard/safdjg',
    },
    {
      id: 4,
      imgUrl: '/payments.svg',
      name: 'Pay History',
      url: '/dashboard/bdhjsgfh',
    },
    {
      id: 5,
      imgUrl: '/online-payment.svg',
      name: 'Pay Online',
      url: '/dashboard/sdfhgd',
    },
    {
      id: 6,
      imgUrl: '/e-library.svg',
      name: 'E-Library',
      url: '/member-portal-elibrary',
    },
    {
      id: 7,
      imgUrl: '/member-card.svg',
      name: 'Member Card',
      url: '/dashboard/jgdhfs',
    },
    {
      id: 8,
      imgUrl: '/election.svg',
      name: 'Election',
      url: '/dashboard/djjtyr',
    },
    {
      id: 9,
      imgUrl: '/resources.svg',
      name: 'Resources',
      url: '/dashboard/ytryrds',
    },
  ];
  const router = useRouter();
  return (
    <NavElementsContainer>
      <div className='wrapper'>
        <div className='nav-grid'>
          {navdata.map(({ id, imgUrl, name, url }) => (
            
            <NavLinks
              key={id}
              imgUrl={imgUrl}
              name={name}
              url={url}
              active={router.pathname === url ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    </NavElementsContainer>
  );
};

export default NavElements;
