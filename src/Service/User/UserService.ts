import { BaseResponse } from "@/Data/Type/BaseResponse";
import { EditUserPassword, EditUserProfile } from "@/Data/Type/User/User";
import { CustomAxios } from "../Api/CustomAxios";

// export async function getUserInfo() {

// }

export async function editUserProfile(EditUserProfile: EditUserProfile) {
  const response: BaseResponse = await CustomAxios.put(
    "/api/v1/user/editProfile",
    EditUserProfile
  ).then((res) => res.data);
  return response;
}

export async function editUserPassword(EditUserPassword: EditUserPassword) {
  const response: BaseResponse = await CustomAxios.put(
    "/api/v1/user/editPassword",
    EditUserPassword
  ).then((res) => res.data);
  return response;
}
