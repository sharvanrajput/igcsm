import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        password: '',
        rememberMe: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        // Add your login logic here
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                {/* Login Card */}
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    {/* Logo Header */}
                    <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 px-6 py-8 sm:px-8 sm:py-10 text-center">
                        {/* <div className="flex justify-center mb-2">
                            Logo - Replace with actual logo image
                            <div className="bg-white rounded-full p-2 shadow-lg">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center relative overflow-hidden">
                                    Graduation cap icon
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                                    </svg>
                                    Book icon overlay
                                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                        <div className="text-white">
                            <h1 className="text-xl sm:text-2xl font-bold mb-1">IGCSM</h1>
                            <p className="text-xs sm:text-sm text-blue-300">TRAINING ACADEMY</p>
                            <p className="text-[10px] sm:text-xs text-gray-300 mt-1">SKILL TRAINING • SKILL DEVELOPMENT</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-8 sm:py-10">
                        {/* Mobile Number */}
                        <div className="mb-6">
                            <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                placeholder="Mobile Number"
                                maxLength="10"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                                required
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                id="rememberMe"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                                Remember me?
                            </label>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-center mb-6">
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 inline-flex items-center gap-1">
                                <Lock className="w-3 h-3" />
                                Forgot your password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-400 to-orange-400 hover:from-orange-500 hover:to-orange-500 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                        >
                            Log In
                        </button>

                        {/* Register Link */}
                        <div className="mt-6 text-center text-sm text-gray-600">
                            Don't have an account?{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline">
                                Register Now
                            </a>
                        </div>
                    </form>
                </div>

               
            </div>
        </div>
    );
};

export default LoginForm;