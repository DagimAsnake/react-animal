import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28">
        {<Outlet />}
      </main>
    </div>
  );
};

export default Layout;