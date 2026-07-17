import axios from "axios";

const request = axios.create({
  baseURL: "example.com/api",
  timeout: 1000,
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

request.interceptors.response.use(
  (res) => res.data,
  (err) => {
    return Promise.reject
  },
);
