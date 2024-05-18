import { TOKEN_COOKIE } from "@/service/store/auth";
import { getCookies } from "@/utils/cookies";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/";

export const ENDPOINTS = {
  MENU: "menus",
  CATEGORY: "category",
  RESERVATIONS: "reservations",
  USERS: "users",
};

export const instance = axios.create({
  baseURL: BASE_URL,
});

const PROTECTED_ENDPOINTS = [
  ENDPOINTS.MENU,
  ENDPOINTS.CATEGORY,
  ENDPOINTS.RESERVATIONS,
  ENDPOINTS.USERS
];

instance.interceptors.request.use(
  (config) => {
    const token = getCookies(TOKEN_COOKIE);

    if (
      config.url &&
      PROTECTED_ENDPOINTS.some((endpoint) => config.url?.includes(endpoint)) &&
      token
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
