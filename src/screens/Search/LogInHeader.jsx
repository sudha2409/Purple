import React, { useState, useEffect } from 'react';
import './loginHeader.css';

const LogInHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("Dropdown clicked");
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  useEffect(() => {
    console.log("isDropdownOpen:", isDropdownOpen);
  }, [isDropdownOpen]);
  
  return (
    <div className="login-header">
      <div className="navbar">
        <div className="text-wrapper-11">Creatives</div>
        <div className="text-wrapper-11">Influencers</div>
        <div className="text-wrapper-11">Favourites</div>
        <div className="text-wrapper-11">Upgrade plan</div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-30" onClick={toggleDropdown}>
          <div className="text-wrapper-12">Profile</div>
        </div>
        {isDropdownOpen && (
         <div
         className="dropdown-menu"
         style={{
           position: "absolute",
           top: "40px",
           right: "0",
           backgroundColor: "white",
           border: "1px solid #ccc",
           boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
           zIndex: "1"
         }}
       >
         <div className="dropdown-item"
         style={{ padding: "10px",
          cursor: "pointer",
          transition: "background-color 0.3s"}}>
          Reset Your Password
          </div>
         <div className="dropdown-item">Logout</div>
       </div>
       )}
      </div>
      <div className="frame-31">
        <div className="group-2">
          <div className="overlap-group-3">
            <img
              className="img-3"
              alt="Img"
              src="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/-.svg"
            />
          </div>
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="ellipse-6" />
        </div>
        <div className="text-wrapper-13">Purple Maze</div>
      </div>
    </div>
  );
};

export default LogInHeader;
