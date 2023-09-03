import React from 'react';
import './PopupMessage.css';
import { Link } from 'react-router-dom';

const ReverificationPopup = ({ onClose }) => {
  return (
    <div className="popup-container show">
      <div className="popup-message">
        <p>Something went wrong. Please reverify.</p>
        <Link to="/Reverification-Email">
          <button>Reverify</button>
        </Link>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ReverificationPopup;
