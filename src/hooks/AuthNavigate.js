import moment from 'moment';
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthNavigate = ({ }) => {
  const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));

  const location = useLocation();

  return (
       accessAuth?.accessToken 
              ? <Navigate to="/SearchPage" state={{ from: location }} replace />
              : <Outlet />
  );
};
export default AuthNavigate;