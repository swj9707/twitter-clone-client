import { EditUserPassword, EditUserProfile } from "../../Store/Type/User/User";
import { CustomAxios } from "../Api/CustomAxios";

export async function editUserProfile(EditUserProfile: EditUserProfile) {
  const response = await CustomAxios.put(
    "/api/v1/user/editProfile",
    EditUserProfile
  ).then((res) => res.data);
  return response;
}

export async function editUserPassword(EditUserPassword: EditUserPassword) {
  const response = await CustomAxios.put(
    "/api/v1/user/editPassword",
    EditUserPassword
  ).then((res) => res.data);
  return response;
}
