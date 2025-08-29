import API from "./axios";

// 👤 Auth endpoints
export const register = (payload) => API.post("auth/register", payload);
export const login = (payload) => API.post("auth/login", payload);
export const getCurrentUser = () => API.get("auth/me");
