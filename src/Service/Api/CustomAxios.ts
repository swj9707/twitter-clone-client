import axios, { AxiosError } from "axios";
import { FailureResponse } from "../../Store/Type/BaseResponse";
import { reissue } from "../Auth/AuthService";
import { useNavigate } from "react-router-dom";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export default axios.create({
  baseURL: process.env.REACT_APP_GCP_API_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_GCP_API_SERVER,
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
    const navigate = useNavigate();

    if (error.response?.status === 401) {
      if (responseData.data === "Token Expired") {
        const originRequest = error.config;
        reissue().then(() => {
          if (originRequest !== undefined) {
            return axiosPrivate.request(originRequest);
          }
        });
      }
    } else if (error.response?.status === 403) {
      if (responseData.data === "리프레쉬 토큰이 만료되었습니다.") {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("USER_INFO");
        navigate("/");
      }
    }
  }
);
