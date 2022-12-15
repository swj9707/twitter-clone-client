import { BaseResponse } from "../BaseResponse";

export interface LoginResponse extends BaseResponse {
  data: {
    userInfo: {
      userEmail: string;
      userUid: string;
    };
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

export interface reissueResponse extends BaseResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
