import React from "react";
import Auth from "../utils/Auth"
import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute() {
	!Auth.authenticated ? <Outlet /> : <Navigate to="/"/>;
}