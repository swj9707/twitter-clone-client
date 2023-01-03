import axios, { AxiosError } from "axios";
import { FailureResponse } from "../../Store/Type/BaseResponse";
import { refreshToken, reissue } from "../Auth/AuthService";
import { useNavigate } from "react-router-dom";
import { resolve } from "path";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_LOCAL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_LOCAL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
  },
  withCredentials: true,
});

axiosPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (config.headers !== undefined) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const responseData: FailureResponse | any = error.response?.data;

    if (responseData.status === "UNAUTHORIZED") {
      if (responseData.data === "Token Expired") {
        const originRequest = error.config;
        await refreshToken().then(() => {
          if (originRequest !== undefined) {
            window.location.reload();
            const result = axiosPrivate(originRequest);
            return Promise.resolve(result);
          }
        });
      }
    } else if (responseData.status === "FORBIDDEN") {
      if (responseData.data === "리프레쉬 토큰이 만료되었습니다.") {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("USER_INFO");
      }
    }

    return Promise.resolve(error);
  }
);
