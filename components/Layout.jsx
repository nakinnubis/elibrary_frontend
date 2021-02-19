import React from 'react';
import Footer from './Footer';
import MemberInformation from './MemberInformation';
import Navbar from './Navbar';
import NavElements from './NavElements';
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <NavElements />
      <MemberInformation />
      {children}
    </div>
  );
};

export default Layout;
