import { loginForm } from "../../Store/Type/Auth/Auth";
import { LoginResponse, ReissueResponse } from "../../Store/Type/Auth/AuthRes";
import CustomAxios, { axiosPrivate } from "../Api/CustomAxios";

export async function requestLogin(loginForm: loginForm) {
  await CustomAxios.post("/api/auth/v1/login", loginForm)
    .then((res) => {
      const response: LoginResponse = res.data;
      const userInfo = response.data.userInfo;
      const accessToken = response.data.tokenInfo.accessToken;
      localStorage.setItem("ACCESS_TOKEN", accessToken);
      localStorage.setItem("USER_INFO", JSON.stringify(userInfo));
      window.location.href = "/";
      CustomAxios.defaults.headers.common["Authorization"] =
        "Bearer " + accessToken;
    })
    .catch((ex) => {
      alert("Login request fail : " + ex);
    });
}

export async function requestLogout() {
  await axiosPrivate
    .post("/api/auth/v1/logout")
    .then(() => {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER_INFO");
    })
    .catch((ex) => {
      console.log("logout reguest fail : " + ex);
    });

  window.location.href = "/";
}

export async function refreshToken() {
  await axiosPrivate
    .post("/api/auth/v1/reissue", {
      accessToken: localStorage.getItem("ACCESS_TOKEN"),
    })
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
