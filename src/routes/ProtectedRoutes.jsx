import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, getUser } from "../utils/auth";

const ProtectedRoute = ({ allowedRoles }) => {
  const isAuth = isAuthenticated();
  const user = getUser();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return user?.role === "instructor" 
      ? <Navigate to="/dashboard/instructor" /> 
      : <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;