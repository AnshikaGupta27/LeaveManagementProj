import React from 'react'; 
import SummaryCard from './SummaryCard';
import './AdminSummary.css';

import {
  FaBuilding,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle
} from 'react-icons/fa';

const AdminSummary = () => {
  return (
    <div className='admin-summary'>
      <h3 className='dashboard-title'>Dashboard Overview</h3>
      
      <div className='summary-grid'>
        <SummaryCard icon={<FaUsers />} text="Total Employees" number={13} color="teal" />
        <SummaryCard icon={<FaBuilding />} text="Total Departments" number={5} color="yellow" />
      </div>

      <div className="leave-section">
        <h4 className="leave-title">Leave Details</h4>

        <div className="leave-grid">
        <SummaryCard icon={<FaCalendarAlt />} text="Leave Applied" number={5} color="teal" />
          <SummaryCard icon={<FaCheckCircle />} text="Leave Approved" number={5} color="green" />
          <SummaryCard icon={<FaHourglassHalf />} text="Leave Pending" number={5} color="orange" />
          <SummaryCard icon={<FaTimesCircle />} text="Leave Rejected" number={5} color="red" />
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
