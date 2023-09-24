import React from 'react';
import "./UpgradeNow.css"
function FreeTrialInfo(props) {
  return (
    <div className="free-trial-info">
      <h2>You are on a free trial right now</h2>
      <p>We are showing limited ads to you right now.</p>
      <p>Please upgrade for more ads.</p>
      <button onClick={props.onUpgradeClick}>Upgrade</button>
    </div>
  );
}

export default FreeTrialInfo;
