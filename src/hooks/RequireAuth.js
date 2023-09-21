import { Navigate, Outlet, useLocation } from "react-router-dom";
import ROLES from "../hooks/roles";

const RequireAuth = ({ allowedRoles }) => {
    const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));
    const location = useLocation();


    return (
        accessAuth?.roles === allowedRoles || accessAuth?.roles === ROLES.Admin
            ? <Outlet />
            : accessAuth?.accessToken 
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/SearchPage" state={{ from: location }} replace />
    );
}

export default RequireAuth;