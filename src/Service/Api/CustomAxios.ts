import axios from "axios";
import { API_BASE_URL } from "../../Config/api-config";

export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
  },
  withCredentials: true,
});
