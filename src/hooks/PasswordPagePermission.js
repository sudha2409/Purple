import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PasswordPagePermission = () => {
  const userToken = localStorage.getItem('userToken');

  const location = useLocation();
  return (
       !userToken 
       ? <Navigate to="/" state={{ from: location }} replace />
       : <Outlet />
  );
};
export default PasswordPagePermission;