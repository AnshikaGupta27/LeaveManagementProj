import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaBuilding,
  FaTachometerAlt,
  FaCalendarAlt,
  FaUsers,
  FaCogs,
} from 'react-icons/fa';
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="nav-links">
        <NavLink
          to="/admin-dashboard"
          end
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/employees"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          <FaUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          <FaBuilding />
          <span>Departments</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          <FaCalendarAlt />
          <span>Leaves</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/settings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
