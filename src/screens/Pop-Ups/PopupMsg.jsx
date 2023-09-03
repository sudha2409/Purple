import React, { useState, useEffect } from 'react';
import './PopupMessage.css';

const PopupMsg = () => {
  const [showEmailVerificationMessage, setShowEmailVerificationMessage] = useState(false);

  useEffect(() => {
    const emailVerificationRequired = localStorage.getItem('emailVerificationRequired');
    if (emailVerificationRequired === 'true') {
      setShowEmailVerificationMessage(true);
      localStorage.removeItem('emailVerificationRequired');
    }
  }, []);

  const closeMessage = () => {
    setShowEmailVerificationMessage(false);
  };

  return (
    <div className={`popup-container ${showEmailVerificationMessage ? 'show' : ''}`}>
      <div className="popup-message">
        <p>Please verify your email address.</p>
        <button onClick={closeMessage}>Close</button>
      </div>
    </div>
  );
};

export default PopupMsg;
