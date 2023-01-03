import loginForm, { signupForm } from "../../Store/Type/Auth/Auth";
import {
  LoginResponse,
  LogoutResponse,
  RegisterResponse,
  ReissueResponse,
} from "../../Store/Type/Auth/AuthRes";
import CustomAxios, { axiosPrivate } from "../Api/CustomAxios";

export async function requestLogin(loginForm: loginForm) {
  const response: LoginResponse = await CustomAxios.post(
    "/api/auth/v1/login",
    loginForm
  ).then((res) => res.data);
  return response;
}

export async function requestLogout() {
  const response: LogoutResponse = await axiosPrivate
    .post("/api/auth/v1/logout")
    .then((res) => res.data);
  return response;
}

export async function requestSignup(signupForm: signupForm) {
  const response: RegisterResponse = await CustomAxios.post(
    "/api/auth/v1/register",
    signupForm
  ).then((res) => res.data);
  return response;
}

export const reissue = async () => {
  try {
    const userInfo = localStorage.getItem("USER_INFO");
    if (userInfo != null) {
      const data = await CustomAxios.post("/api/auth/v1/reissue");
      const newAccessToken = data.data.data.accessToken;
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.setItem("ACCESS_TOKEN", newAccessToken);
    }
  } catch (err) {
    console.log(err);
  }
};

export async function refreshToken() {
  await axiosPrivate
    .post("/api/auth/v1/reissue")
    .then((res) => {
      const response: ReissueResponse = res.data;
      const newAccessToken = response.data.accessToken;
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.setItem("ACCESS_TOKEN", newAccessToken);
    })
    .catch((ex) => {
      console.log("Token Reissue Fail : " + ex);
    });
}
