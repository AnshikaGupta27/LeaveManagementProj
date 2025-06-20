import React from 'react';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import Navbar from '../components/dashboard/Navbar';
import { Outlet } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="admin-dashboard-container">
        <AdminSidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard; 