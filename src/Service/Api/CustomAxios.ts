import axios, { AxiosError } from "axios";
import { FailureResponse } from "../../Store/Type/BaseResponse";
import { refreshToken, reissue } from "../Auth/AuthService";

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

axiosPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (config.headers !== undefined) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const responseData: FailureResponse | any = error.response?.data;

    if (error.response?.status === 401) {
      if (responseData.data === "Token Expired") {
        const originRequest = error.config;
        reissue().then(() => {
          if (originRequest !== undefined) {
            window.location.replace("/");
            return axiosPrivate.request(originRequest);
          }
        });
      }
    } else if (error.response?.status === 403) {
      if (responseData.data === "리프레쉬 토큰이 만료되었습니다.") {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("USER_INFO");
        window.location.href = "/";
      }
    }
  }
);
