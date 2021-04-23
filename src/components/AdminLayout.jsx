import { FC } from 'react';
import AdminInformation from './AdminInformation';
import AdminNavbar from './AdminNavbar';
import AdminNavElements from './AdminNavElements';
const AdminLayout  = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      <AdminNavElements />
      <AdminInformation />
      {children}
    </div>
  );
};

export default AdminLayout;
