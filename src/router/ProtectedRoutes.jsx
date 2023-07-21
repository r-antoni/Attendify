import Auth from "../utils/Auth";
import {Navigate, Outlet} from "react-router-dom";

export default function ProtectedRoute() {
  if (!Auth.authenticated()) {
    return <Outlet />;
  }

  return <Navigate to="/dashboard" />;
}
