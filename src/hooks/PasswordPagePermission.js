import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const PasswordPagePermission = ({ }) => {
  const userToken = localStorage.getItem('userToken');

  const location = useLocation();
  return (
       !userToken 
       ? <Navigate to="/" state={{ from: location }} replace />
       : <Outlet />
  );
};
export default PasswordPagePermission;