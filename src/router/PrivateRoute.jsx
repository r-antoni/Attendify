import Auth from "../utils/Auth";
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";
import AccessDenied from "../pages/AccessDenied";
import propTypes from "prop-types";

export default function PrivateRoute({roleRequired}) {
  const role = Cookies.get("role");

  if (roleRequired) {
    return Auth.authenticated() ? roleRequired.includes(role) ? <Outlet /> : <AccessDenied /> : <Navigate to="/" />;
  } else {
    return Auth.authenticated() ? <Outlet /> : <Navigate to="/" />;
  }
}

PrivateRoute.propTypes = {
  roleRequired: propTypes.array,
};
