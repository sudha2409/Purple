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
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
  }, [isDropdownOpen]);

  useEffect(() => {
    if ((accessAuth?.roles === ROLES_LIST.Admin || accessAuth?.roles === ROLES_LIST.PaidUser)) {
      setFreeRole(false);
    }
  }, [])
  return (
    <header class="flex header_color justify-between bx-auto py-2">
      <a href='/'>
      <div class="flex justify-center items-center px-8 sm:px-8">
        <img src="Group 1.png" />
        <h1 class="px-2 text-color font-type-quicksand">Purple Maze</h1>
      </div>
      </a>
      <div class="flex items-center px-2">
        {freeRole ?
          <a href="/#see-pricing" class="hidden font-type-monasans text-color-1 sm:inline sm:px-4 ">Upgrade Plan</a> : ""}


        <div className="purple signup_color px-6 py-2 rounded-full sm:mx-2 " onClick={toggleDropdown}>
          Profile
          {isDropdownOpen && <Dropdown onLogout={signOut} resetPassword={resetPassword} />}
        </div>
      </div>

    </header>

    // <div className="login-header">
    //   <div className="navbar">
    //     {/* <div className="text-wrapper-11">Creatives</div>
    //     <div className="text-wrapper-11">Influencers</div>
    //     <div className="text-wrapper-11">Favourites</div> */}
    //     <div className="text-wrapper-11"> {freeRole ?  <Link className="text-wrapper-47" to={"/checkout-payment"} >Upgrade plan</Link>  :  "" } </div>

    //   </div>
    //   <div className="frame-wrapper">

    //   <div className="frame-31">
    //     <div className="group-2">
    //       <div className="overlap-group-3">
    //         <img
    //           className="img-3"
    //           alt="Img"
    //           src="https://generation-sessions.s3.amazonaws.com/14fee2d83e15953598a18f47bcb63aab/img/-.svg"
    //         />
    //       </div>
    //       <div className="ellipse-4" />
    //       <div className="ellipse-5" />
    //       <div className="ellipse-6" />
    //     </div>
    //     <div >
    //       <a className="text-wrapper-13" style={{ textDecorationLine: 'none' }} href="/SearchPage">
    //         Purple Maze
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LogInHeader;
