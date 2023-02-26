import { BaseResponse } from "@/Data/Type/BaseResponse";
import { AxiosResponse } from "axios";
import {
  EditUserPassword,
  EditUserProfile,
  EditUserProfileReq,
} from "@/Data/Type/User/User";
import { CustomAxios } from "../Api/CustomAxios";
import { UserProfileRes } from "@/Data/Type/User/UserRes";

export async function getUserInfo(userId: String) {
  const response: BaseResponse = await CustomAxios.get(
    "/api/v1/user/getUserInfo",
    {
      params: {
        userId: userId,
      },
    }
  ).then((res: AxiosResponse) => res.data);
  return response;
}

export async function getUserProfile(userName: String) {
  const response: UserProfileRes = await CustomAxios.get(
    "/api/v1/user/getUserProfile",
    {
      params: {
        userName: userName,
      },
    }
  ).then((res: AxiosResponse) => res.data);
  return response;
}

export async function editUserProfile(EditUserProfile: EditUserProfile) {
  const response: BaseResponse = await CustomAxios.put(
    "/api/v1/user/editProfile",
    EditUserProfile
  ).then((res: AxiosResponse) => res.data);
  return response;
}

export async function editUserProfileReq(EditUserProfie: EditUserProfileReq) {
  const response: BaseResponse = await CustomAxios.put(
    "/api/v1/user/editUserProfile",
    EditUserProfie
  ).then((res: AxiosResponse) => res.data);
  return response;
}

export async function editUserPassword(EditUserPassword: EditUserPassword) {
  const response: BaseResponse = await CustomAxios.put(
    "/api/v1/user/editPassword",
    EditUserPassword
  ).then((res: AxiosResponse) => res.data);
  return response;
}
