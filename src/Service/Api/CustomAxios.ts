import axios, { AxiosError } from "axios";
import { FailureResponse } from "../../Store/Type/BaseResponse";
import { refreshToken, requestLogout } from "../Auth/AuthService";

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

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    const response: FailureResponse = error.response.data;
    if (
      response.status === "BAD_REQUEST" &&
      response.data === "올바르지 않은 토큰 요청입니다."
    ) {
      refreshToken();
      return axiosPrivate.request(error.config);
    } else if (
      response.status === "FORBIDDEN" &&
      response.data === "리프레쉬 토큰이 만료되었습니다."
    ) {
      localStorage.removeItem("ACCESS_TOKEN");
      window.location.href = "/";
    } else {
      return Promise.reject(error);
    }
  }
);
