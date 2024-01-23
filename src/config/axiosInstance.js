import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  // baseURL: "https://rosery-app-api.onrender.com/api",
});
export const PF = "http://localhost:8000";
