
import { Navigate } from "react-router-dom";
import { getAdminToken } from "../../services/adminApi";

function ProtectedRoute({ children }) {
  if (!getAdminToken()) {
    return <Navigate to="/staff/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
