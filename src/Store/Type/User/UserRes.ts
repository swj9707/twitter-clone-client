import { TwitterUserDTO } from "../Auth/Auth";
import { BaseResponse } from "../BaseResponse";

export interface EditProfileRes extends BaseResponse {
  data: {
    userInfo: TwitterUserDTO;
  };
}
