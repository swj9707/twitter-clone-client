import { ImageInfo } from "../Image/Image";

export interface TwitterUserProfile {
  email: String;
  userName: String;
  profileImage: ImageInfo;
  backgroundImage: ImageInfo;
}

export interface EditUserProfile {
  userId?: string;
  newUserName: string;
}

export interface EditUserPassword {
  userId?: string;
  currentPassword: string;
  newPassword: string;
}
