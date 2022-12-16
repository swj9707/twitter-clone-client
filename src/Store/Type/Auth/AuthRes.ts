import { BaseResponse } from "../BaseResponse";
import { TwitterUserDTO } from "./Auth";

export interface LoginResponse extends BaseResponse {
  data: {
    userInfo: TwitterUserDTO;
    tokenInfo: {
      accessToken: string;
      refreshToken: string;
    };
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
