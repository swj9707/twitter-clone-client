import { TwitterUserAuthInfo } from "../Auth/Auth";
import { BaseResponse } from "../BaseResponse";
import { TwitterUserInfo, TwitterUserProfile } from "./User";

export interface UserInfoRes extends BaseResponse {
  data: {
    userInfo: TwitterUserInfo;
  };
}

export interface UserProfileRes extends BaseResponse {
  data: {
    userProfile: TwitterUserProfile;
    countOfTweet: number;
  };
}

export interface EditProfileRes extends BaseResponse {
  data: {
    userInfo: TwitterUserAuthInfo;
  };
}
