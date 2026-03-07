import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Protects routes by role. Redirects to login if not authenticated.
 * requiredRoles: optional array, e.g. ["student"], ["franchise"], ["admin"]
 */
export default function ProtectedRoute({ children, requiredRoles = [] }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-500">Loading...</p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
        const roleDashboard = { admin: "/admin-dashboard", franchise: "/franchise-dashboard", student: "/student-dashboard" };
        return <Navigate to={roleDashboard[user.role] || "/"} replace />;
    }

    return children;
}
