import React from 'react';
import { Link } from 'react-router-dom';

const SomethingWentWrong = () => {
  return (
    <div className="not-found">
      <h1>401 - Page Not Found</h1>
      <p>There is some error, we are working on it.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
};
export default SomethingWentWrong;
