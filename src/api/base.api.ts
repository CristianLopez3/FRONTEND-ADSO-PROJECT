import axios from "axios";

const BASE_URL = "http://localhost:9090/api/v1/";

export const instance = axios.create({
  baseURL: BASE_URL
})