import React from 'react';
import './profileDropdown.css';

const Dropdown = ({ onLogout }) => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Dropdown;
