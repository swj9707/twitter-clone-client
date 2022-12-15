import { useEffect } from "react";
import { axiosPrivate } from "../Service/Api/CustomAxios";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: any) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${localStorage.getItem(
            "ACCESS_TOKEN"
          )}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken: string = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          localStorage.setItem("ACCESS_TOKEN", newAccessToken);
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
  }, [refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
