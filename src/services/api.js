import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/";

export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

// Add response interceptor for better error handling
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            console.error("Unauthorized access - redirecting to login");
        }
        return Promise.reject(error);
    }
);

// Interceptor to handle FormData properly (don't set Content-Type for multipart)
api.interceptors.request.use(
    config => {
        if (config.data instanceof FormData) {
            // Let the browser set the Content-Type with boundary
            delete config.headers['Content-Type'];
        }
        return config;
    },
    error => Promise.reject(error)
);