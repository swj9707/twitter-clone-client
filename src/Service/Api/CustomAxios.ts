import backendConfig from "@/Config/api-config";
import axios, { AxiosError } from "axios";
import { FailureResponse } from "../../Store/Type/BaseResponse";
import { refreshToken } from "../Auth/AuthService";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const CustomAxios = axios.create({
  baseURL: backendConfig.backendHost,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

CustomAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (config.headers !== undefined) {
    if (token !== null) {
      config.headers.Authorization = "Bearer " + token;
    }
  }
  return config;
});

CustomAxios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const responseData: FailureResponse | any = error.response?.data;

    if (responseData.status === "UNAUTHORIZED") {
      if (responseData.data === "Token Expired") {
        const originRequest = error.config;
        await refreshToken().then(() => {
          if (originRequest !== undefined) {
            window.location.reload();
            const result = axios(originRequest);
            return Promise.resolve(result);
          }
        });
      }
    } else if (responseData.status === "FORBIDDEN") {
      if (responseData.data === "리프레쉬 토큰이 만료되었습니다.") {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("USER_INFO");
        window.location.replace("/");
      }
    }

    return Promise.resolve(error);
  }
);
