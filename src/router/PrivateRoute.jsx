import React from "react";
import Auth from "../utils/Auth"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    Auth.authenticated ? <Outlet /> : <Navigate to="/login"/>
}
export default PrivateRoute