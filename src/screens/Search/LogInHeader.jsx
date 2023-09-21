import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './loginHeader.css';
import useLogout from '../../hooks/useLogout';
import Dropdown from './ProfileDropdown';
import { ROLES_LIST } from '../../api/config';

const LogInHeader = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));
  const [freeRole, setFreeRole] = useState(true);
  const signOut = async () => {
      await logout();
      navigate('/login');
  }

  const resetPassword = () => {
    navigate('/Reset-password');
}
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    console.log("Dropdown clicked");
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  useEffect(() => {
    console.log("isDropdownOpen:", isDropdownOpen);
  }, [isDropdownOpen]);
  
  useEffect(() => {
    if((accessAuth?.roles === ROLES_LIST.Admin || accessAuth?.roles === ROLES_LIST.PaidUser)){
      setFreeRole(false);
    }
  }, [])
  return (
    <div className="login-header">
      <div className="navbar">
        {/* <div className="text-wrapper-11">Creatives</div>
        <div className="text-wrapper-11">Influencers</div>
        <div className="text-wrapper-11">Favourites</div> */}
        <div className="text-wrapper-11"> {freeRole ?  <Link className="text-wrapper-47" to={"/checkout-payment"} >Upgrade plan</Link>  :  "" } </div>

      </div>
      <div className="frame-wrapper">
      <div className="frame-30 dropdown" onClick={toggleDropdown}>
            Profile
            {isDropdownOpen && <Dropdown onLogout={signOut} resetPassword = {resetPassword} />}
          </div>
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
        <div >
          <a className="text-wrapper-13" style={{ textDecorationLine: 'none' }} href="/SearchPage">
            Purple Maze
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogInHeader;
