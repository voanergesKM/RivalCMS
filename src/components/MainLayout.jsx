import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
      <Outlet />
    </div>
  );
};
