import axios from "axios";
import {BASE_URL} from "@env"
export const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  