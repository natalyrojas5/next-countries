import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API;
export const API = axios.create({ baseURL });

API.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);
