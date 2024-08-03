import axios from "axios";

export const api = axios.create({
  baseURL: "https://full-stack-cars-fake-api.vercel.app/",
  timeout: 20000,
});
