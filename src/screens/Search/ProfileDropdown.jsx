import React from 'react';
import './profileDropdown.css';

const Dropdown = ({ onLogout, resetPassword, upgradeprofile }) => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li onClick={resetPassword}>Reset Password</li>
        <li onClick={onLogout}>Logout</li>
        <li class = "sm:hidden py-2" onClick={upgradeprofile}>Upgrade Profile</li>
      </ul>
    </div>
  );
};

export default Dropdown;
