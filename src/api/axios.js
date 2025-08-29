import axios from "axios";

const baseURL =
  (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api").replace(
    /\/+$/,
    "" // remove trailing slash if any
  );

const API = axios.create({
  baseURL,
});

// 🔐 Attach token if present
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 🛠 Dev console logs
    if (import.meta.env.DEV) {
      console.groupCollapsed(
        `API Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`
      );
      console.log("Headers:", config.headers);
      console.log("Params:", config.params);
      console.log("Data:", config.data);
      console.groupEnd();
    }

    return config;
  },
  (error) => {
    if (import.meta.env.DEV) console.error("API Request error:", error);
    return Promise.reject(error);
  }
);

// 📦 Response handling
API.interceptors.response.use(
  (res) => {
    if (import.meta.env.DEV) {
      console.groupCollapsed(
        `API Response: ${res.config.method?.toUpperCase()} ${res.config.baseURL}${res.config.url} → ${res.status}`
      );
      console.log("Data:", res.data);
      console.groupEnd();
    }
    return res;
  },
  (error) => {
    let message = "Something went wrong";

    if (error.response) {
      message = error.response.data?.message || `Error ${error.response.status}`;
      if (import.meta.env.DEV) {
        console.groupCollapsed(
          `API Response error: ${error.config?.method?.toUpperCase()} ${error.config?.baseURL}${error.config?.url}`
        );
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
        console.log("Headers:", error.response.headers);
        console.groupEnd();
      }
    } else if (error.request) {
      message = "No response from server";
      if (import.meta.env.DEV) {
        console.log("No response received. Request:", error.request);
      }
    } else {
      message = error.message;
    }

    return Promise.reject(new Error(message));
  }
);

export default API;
