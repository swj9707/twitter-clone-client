import { BaseResponse } from "../BaseResponse";
import { TwitterUserAuthInfo } from "./Auth";

export interface LoginResponse extends BaseResponse {
  data: {
    userInfo: TwitterUserAuthInfo;
    tokenInfo: {
      accessToken: string;
      refreshToken: string;
    };
  };
}

export interface RegisterResponse extends BaseResponse {
  data: {
    userEmail: string;
    userName: string;
  };
}

export interface LogoutResponse extends BaseResponse {
  data: {
    userEmail: string;
  };
}

export interface ReissueResponse extends BaseResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
