import moment from "moment";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const AuthVerify = () => {
  const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));
  const [authExpire, setAuthExpire] = useState(false);
  const location = useLocation();

  const checkExpiry = moment().isAfter(accessAuth?.expires);

  useEffect(() => {
    if (accessAuth) {
      if (checkExpiry) {
        localStorage.clear();
        setAuthExpire(true);
      }
    } else {
      localStorage.clear();
      console.log("login");
      setAuthExpire(true);
    }
  }, []);

  return authExpire ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default AuthVerify;
