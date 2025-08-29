import API from "./axios";

export const getTransactions = (type) =>
  API.get(`/transactions${type ? `?type=${type}` : ""}`);
export const createTransaction = (data) => API.post("/transactions", data);
export const getTransaction = (id) => API.get(`/transactions/${id}`);
export const updateTransaction = (id, data) => API.patch(`/transactions/${id}`, data);
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`);
