import axios from "axios";

export const api = axios.create({
  baseURL: "https://project-full-stack-1.onrender.com",
  timeout: 20000,
});
