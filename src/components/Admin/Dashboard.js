import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-cont">
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-pills">Welcome Admin</h2>
        </div>
        <div className="card-body">
          <NavLink to={'/create-emp'}>
            <button className="btn btn-lg btn-primary">Create Employees</button>
          </NavLink>
          <NavLink to={'/timeline'}>
            <button className="btn btn-lg btn-success">Go to Feed</button>
          </NavLink>
          <NavLink to={'/flag'}>
            <button className="btn btn-lg btn-danger">
              Check Flagged Post
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
