import React from "react";
import Auth from "../utils/Auth"
import { Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

	export default function ProtectedRoute() {
        if (!Auth.authenticated()) {
            return (
                <AuthLayout>
                    <Outlet />;
                </AuthLayout>
            );
        }
    
        return <Navigate to="/dashboard" />;
    }
