import axios from "axios";

const api = axios.create({
  // baseURL: process.env.URL_BASE,
  baseURL: "https://localhost:7053/",
});

export { api };
