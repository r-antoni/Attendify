import Auth from "../utils/Auth";
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";
import AccessDenied from "../pages/AccessDenied";

export default function PrivateRoute({roleRequired}) {
  const role = Cookies.get("role");
  if (roleRequired) {
    return Auth.authenticated() ? roleRequired === role ? <Outlet /> : <AccessDenied /> : <Navigate to="/" />;
  } else {
    return Auth.authenticated() ? <Outlet /> : <Navigate to="/" />;
  }
}
