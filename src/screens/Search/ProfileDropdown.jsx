import React from 'react';
import './profileDropdown.css';

const Dropdown = ({ onLogout, resetPassword }) => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li onClick={resetPassword}>Reset Password</li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Dropdown;
