import axios from "axios";

export const api = axios.create({
  baseURL: "https://full-stack-fake-api.vercel.app",
  timeout: 20000,
});
