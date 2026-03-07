import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm = ({ userType = 'student' }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [submitting, setSubmitting] = useState(false);
    const { login, error, setError } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (setError) setError(null);
    };

    const getRedirectByRole = (role) => {
        switch (role) {
            case 'admin': return '/admin-dashboard';
            case 'franchise': return '/franchise-dashboard';
            case 'student': return '/student-dashboard';
            default: return '/';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const result = await login(
                { email: formData.email.trim(), password: formData.password },
                userType
            );
            if (result.success && result.user) {
                const redirect = getRedirectByRole(result.user.role);
                navigate(redirect, { replace: true });
            }
        } finally {
            setSubmitting(false);
        }
    };

    const title = userType === 'admin' ? 'Admin Login' : userType === 'franchise' ? 'Franchise Login' : 'Student Login';

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 px-6 py-8 sm:px-8 sm:py-10 text-center">
                        <div className="text-white">
                            <h1 className="text-xl sm:text-2xl font-bold mb-1">IGCSM</h1>
                            <p className="text-xs sm:text-sm text-blue-300">TRAINING ACADEMY</p>
                            <p className="text-[10px] sm:text-xs text-gray-300 mt-1">{title}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-8 sm:py-10">
                        {error && (
                            <div className="mb-4 p-3 rounded bg-red-50 text-red-700 text-sm">{error}</div>
                        )}

                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                id="rememberMe"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">Remember me?</label>
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-md transition-all"
                        >
                            {submitting ? 'Logging in...' : 'Log In'}
                        </button>

                        <div className="mt-6 text-center text-sm text-gray-600">
                            {userType === 'student' && (
                                <>
                                    Don't have an account?{' '}
                                    <a href="/student" className="text-orange-600 hover:underline font-semibold">Register as Student</a>
                                </>
                            )}
                            {userType === 'franchise' && (
                                <>
                                    New franchise?{' '}
                                    <a href="/franchise" className="text-orange-600 hover:underline font-semibold">Register here</a>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
