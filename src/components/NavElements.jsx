import React from 'react';
import NavElementsContainer from '../styles/NavElementsContainer';
import NavLinks from './NavLinks';
import Profileicon from '../assets/profile.svg';
import Dashboard from '../assets/dashboard.svg';
import Resources from '../assets/resources.svg';
import Election from '../assets/election.svg';
import Membercard from '../assets/member-card.svg';
import Elibrary from '../assets/e-library.svg';
import OnlinePayment from '../assets/online-payment.svg';
import Payment from '../assets/payments.svg';
import Certificate from '../assets/certificate.svg';



import { useRouteMatch, NavLink } from 'react-router-dom';
const NavElements = () => {
  const navdata = [
    {
      id: 1,
      imgUrl: Dashboard,
      name: 'Dashboard',
      url: '/dashboard',
    },
    {
      id: 2,
      imgUrl: Profileicon,
      name: 'Profile',
      url: '/dashboard/dsgfh',
    },
    {
      id: 3,
      imgUrl: Certificate,
      name: 'certificate',
      url: '/dashboard/safdjg',
    },
    {
      id: 4,
      imgUrl: Payment,
      name: 'Pay History',
      url: '/dashboard/bdhjsgfh',
    },
    {
      id: 5,
      imgUrl:OnlinePayment,
      name: 'Pay Online',
      url: '/dashboard/sdfhgd',
    },
    {
      id: 6,
      imgUrl: Elibrary,
      name: 'E-Library',
      url: '/dashboard/member-portal-elibrary',
    },
    {
      id: 7,
      imgUrl: Membercard,
      name: 'Member Card',
      url: '/dashboard/jgdhfs',
    },
    {
      id: 8,
      imgUrl: Election,
      name: 'Election',
      url: '/dashboard/djjtyr',
    },
    {
      id: 9,
      imgUrl: Resources,
      name: 'Resources',
      url: '/dashboard/ytryrds',
    },
  ];
  const {path} = useRouteMatch();
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
              active={path === url ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    </NavElementsContainer>
  );
};

export default NavElements;
