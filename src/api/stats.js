import API from "./axios";

export const getStats = () => API.get("/stats");
export const getSummary = () => API.get("/stats/summary");
export const getByCategory = () => API.get("/stats/by-category");
export const getByMonth = () => API.get("/stats/by-month");
