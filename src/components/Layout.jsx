import { FC } from 'react';
import MemberInformation from './MemberInformation';
import Navbar from './Navbar';
import NavElements from './NavElements';
const Layout  = ({ children }) => {
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
