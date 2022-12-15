import CustomAxios from "../Service/Api/CustomAxios";
import { reissueResponse } from "../Store/Type/Auth/AuthRes";

const useRefreshToken = () => {
  const refresh = async () => {
    let accessToken = "";
    await CustomAxios.post(
      "/api/auth/v1/reissue",
      { accessToken: localStorage.getItem("ACCESS_TOKEN") },
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        const response: reissueResponse = res.data;
        accessToken = response.data.accessToken;
      })
      .catch((ex) => {
        console.log("Error ! Token refresh 작업이 실패하였습니다. : " + ex);
      });
    return accessToken;
  };
  return refresh;
};

export default useRefreshToken;
