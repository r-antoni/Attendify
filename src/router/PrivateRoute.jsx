import React from "react";
import Auth from "../utils/Auth"
import { Navigate, Outlet } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

export default function PrivateRoute() {
	if (Auth.authenticated()) {
		return (
			<RootLayout>
				<Outlet />
			</RootLayout>
		);
	}

	return <Navigate to="/login" />;
}