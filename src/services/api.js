import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/";

console.log("🔗 API Base URL:", API_BASE_URL);

export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: 30000, // 30 seconds
});


api.interceptors.request.use(
    config => {

        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        console.log(`📤 Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    }
);

// Add response interceptor for better error handling
api.interceptors.response.use(
    response => response,
    error => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);


export default api;
