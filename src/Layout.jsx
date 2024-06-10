import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    
  return (
    <div className='bg-slate-500 select-none'>
      <nav className='border-b border-black flex justify-end gap-4 font-bold p-4 pr-4'>
        <Link to="/">Home</Link>
        <Link to="/owner">Owner</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
