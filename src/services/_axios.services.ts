import axios from "axios";

export const api = axios.create({
  // baseURL: process.env.URL_BASE,
  baseURL: "https://localhost:7053/",
});
