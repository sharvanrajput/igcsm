import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check if user is authenticated on mount
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            if (!token) {
                setUser(null);
                return;
            }
            const response = await api.get('/auth/current');
            if (response.data.success && response.data.data) {
                const { user } = response.data.data;
                setUser(user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            setUser(null);
            localStorage.removeItem("token");
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials, userType) => {
        try {
            setLoading(true);
            setError(null);
            // Single backend endpoint for all roles
            const response = await api.post('/auth/login', {
                email: credentials.email || credentials.mobileNumber,
                password: credentials.password,
            });
            if (response.data.success && response.data.data) {
                const { user, accessToken } = response.data.data;
                localStorage.setItem("token", accessToken);
                setUser(user);
                return { success: true, user };
            } else {
                setError(response.data.message || 'Login failed');
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Login error:', error);
            const message = error.response?.data?.message || 'Login failed';
            setError(message);
            return { success: false, message };
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        try {
            setLoading(true);
            setError(null);

            const response = await api.post('/auth/student/register', userData);
            
            if (response.data.success) {
                return { success: true, user: response.data.user };
            } else {
                setError(response.data.message);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Registration error:', error);
            const message = error.response?.data?.message || 'Registration failed';
            setError(message);
            return { success: false, message };
        } finally {
            setLoading(false);
        }
    };

    const verifyEmail = async (email, otp) => {
        try {
            setLoading(true);
            setError(null);

            const response = await api.post('/auth/student/verify-email', { email, otp });
            
            if (response.data.success) {
                setUser(response.data.user);
                return { success: true, user: response.data.user };
            } else {
                setError(response.data.message);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Email verification error:', error);
            const message = error.response?.data?.message || 'Verification failed';
            setError(message);
            return { success: false, message };
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setUser(null);
            localStorage.removeItem("token");
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateProfile = async (userData) => {
        try {
            setLoading(true);
            setError(null);

            const response = await api.put('/students/profile', userData);
            
            if (response.data.success) {
                setUser(response.data.data);
                return { success: true, user: response.data.data };
            } else {
                setError(response.data.message);
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Profile update error:', error);
            const message = error.response?.data?.message || 'Profile update failed';
            setError(message);
            return { success: false, message };
        } finally {
            setLoading(false);
        }
    };

    const value = {
        user,
        loading,
        error,
        setError,
        login,
        register,
        verifyEmail,
        logout,
        updateProfile,
        checkAuth,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
        isStudent: user?.role === 'student',
        isFranchise: user?.role === 'franchise'
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};