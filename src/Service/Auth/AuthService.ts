import { loginForm } from "../../Store/Type/Auth/Auth";
import { LoginResponse, LogoutResponse } from "../../Store/Type/Auth/AuthRes";
import CustomAxios, { axiosPrivate } from "../Api/CustomAxios";

export async function requestLogin(loginForm: loginForm) {
  await CustomAxios.post("/api/auth/v1/login", loginForm)
    .then((res) => {
      const response: LoginResponse = res.data;
      const userInfo = response.data.userInfo;
      const accessToken = response.data.tokenInfo.accessToken;
      localStorage.setItem("ACCESS_TOKEN", accessToken);
      localStorage.setItem("USER_INFO", JSON.stringify(userInfo));
      alert("로그인에 성공하였습니다 \n 토큰 값 : " + accessToken);
      window.location.href = "/";
      CustomAxios.defaults.headers.common["Authorization"] =
        "Bearer " + accessToken;
    })
    .catch((ex) => {
      alert("Login request fail : " + ex);
    });
}

export async function RequestLogout() {
  console.log(CustomAxios.defaults.headers);
  alert(CustomAxios.defaults.headers);

  await axiosPrivate
    .post("/api/auth/v1/logout")
    .then((res) => {
      const response: LogoutResponse = res.data;
      alert("logout success" + response.data.userEmail);
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER_INFO");
    })
    .catch((ex) => {
      console.log("logout reguest fail : " + ex);
    });

  window.location.href = "/";
}
