import React, { useEffect } from 'react';
import './Add.css';

const Add = () => {

  useEffect(() => {
    // Any effect logic can be added here later
  }, []);

  return (
    <div className="add-employee-container">
      <h2 className="form-heading">Add New Employee</h2>
      <form>
        <div className="form-grid">
          {/* Name */}
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" name="name" placeholder="Insert Name" className="form-input" required />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="email" placeholder="Insert Email" className="form-input" required />
          </div>

          {/* Employee ID */}
          <div className="form-group">
            <label className="form-label">Employee ID</label>
            <input type="text" name="employeeId" placeholder="Employee ID" className="form-input" required />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-input" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Department */}
          <div className="form-group">
            <label className="form-label">Department</label>
            <select name="department" className="form-input" required>
              <option value="">Select Department</option>
              <option value="hr">HR</option>
              <option value="it">IT</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" name="password" placeholder="********" className="form-input" />
          </div>

          {/* Employment Status */}
          <div className="form-group">
            <label className="form-label">Employment Status</label>
            <select name="employmentStatus" className="form-input">
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="terminated">Terminated</option>
              <option value="resigned">Resigned</option>
              <option value="retired">Retired</option>
              <option value="notice">Notice Period Serving</option>
              <option value="freelancer">Freelancer</option>
            </select>
          </div>

          {/* Joining Date */}
          <div className="form-group">
            <label className="form-label">Joining Date</label>
            <input type="date" name="joiningDate" className="form-input" />
          </div>

          {/* Last Working Day */}
          <div className="form-group">
            <label className="form-label">Last Working Day (LWD)</label>
            <input type="date" name="lwd" className="form-input" />
          </div>

          {/* Date of FNF */}
          <div className="form-group">
            <label className="form-label">Date of FNF Settlement</label>
            <input type="date" name="fnfDate" className="form-input" />
          </div>

          {/* FNF Status */}
          <div className="form-group">
            <label className="form-label">FNF Status</label>
            <select name="fnfStatus" className="form-input">
              <option value="">Select Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Remark */}
          <div className="form-group">
            <label className="form-label">Remark</label>
            <input type="text" name="remark" placeholder="Any remarks..." className="form-input" />
          </div>

          {/* Resignation Date */}
          <div className="form-group">
            <label className="form-label">Date of Resignation</label>
            <input type="date" name="resignationDate" className="form-input" />
          </div>

          {/* Reason for Separation */}
          <div className="form-group">
            <label className="form-label">Reason for Separation</label>
            <textarea name="separationReason" placeholder="Explain the reason..." className="form-input"></textarea>
          </div>

          {/* Notice Period */}
          <div className="form-group">
            <label className="form-label">Notice Period</label>
            <input type="text" name="noticePeriod" className="form-input" />
          </div>

          {/* Employment Tenure */}
          <div className="form-group">
            <label className="form-label">Employment Tenure (Start Date)</label>
            <input type="date" name="tenureStart" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Employment Tenure (End Date)</label>
            <input type="date" name="tenureEnd" className="form-input" />
          </div>

          {/* Freelancer Fields */}
          <div className="form-group">
            <label className="form-label">Contract Start Date</label>
            <input type="date" name="contractStart" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Contract End Date</label>
            <input type="date" name="contractEnd" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Contract Duration</label>
            <input type="text" name="contractDuration" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Project</label>
            <input type="text" name="project" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Client Name</label>
            <input type="text" name="clientName" className="form-input" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default Add;
