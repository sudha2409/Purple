import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthNavigate = () => {
  const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));

  const location = useLocation();

  return (
       accessAuth?.accessToken 
              ? <Navigate to="/SearchPage" state={{ from: location }} replace />
              : <Outlet />
  );
};
export default AuthNavigate;