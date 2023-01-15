import { BaseResponse } from "@/Store/Type/BaseResponse";
import loginForm, { signupForm } from "../../Store/Type/Auth/Auth";
import { CustomAxios } from "../Api/CustomAxios";

export async function requestLogin(loginForm: loginForm) {
  const response: BaseResponse = await CustomAxios.post(
    "/api/auth/v1/login",
    loginForm
  ).then((res) => res.data);
  return response;
}

export async function requestLogout() {
  const response: BaseResponse = await CustomAxios.post(
    "/api/auth/v1/logout"
  ).then((res) => res.data);
  return response;
}

export async function requestSignup(signupForm: signupForm) {
  const response: BaseResponse = await CustomAxios.post(
    "/api/auth/v1/register",
    signupForm
  ).then((res) => res.data);
  return response;
}

export async function refreshToken() {
  await CustomAxios.post("/api/auth/v1/reissue")
    .then((res) => {
      const response: BaseResponse = res.data;
      const newAccessToken = response.data.accessToken;
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.setItem("ACCESS_TOKEN", newAccessToken);
    })
    .catch((ex) => {
      console.log("Token Reissue Fail : " + ex);
    });
}
