import { ImageInfo } from "../Image/Image";

export interface TwitterUserInfo {
  email: string;
  userName: string;
  userNickname: string;
  userRole: string;
  provider: string;
  lastLogin: string;
  profileImage?: ImageInfo;
  backgroundImage?: ImageInfo;
}

export interface TwitterUserProfile {
  userName: string;
  userNickname: string;
  profileImage: ImageInfo;
  backgroundImage: ImageInfo;
}

export interface TwitterUserProfileState {
  userProfileInfo: TwitterUserProfile;
  countOfTweets: number;
}

//Deprecated
export interface EditUserProfile {
  userId?: string;
  newUserName: string;
}

export interface EditUserProfileReq {
  userId: string;
  newUserNickname: string;
  profileImage?: ImageInfo;
  backgroundImage?: ImageInfo;
}

//Deprecated
export interface EditUserPassword {
  userId?: string;
  currentPassword: string;
  newPassword: string;
}
