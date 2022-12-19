import { EditUserPassword, EditUserProfile } from "../../Store/Type/User/User";
import { axiosPrivate } from "../Api/CustomAxios";

export async function editUserProfile(EditUserProfile: EditUserProfile) {
  const response = await axiosPrivate
    .put("/api/v1/user/editProfile", EditUserProfile)
    .then((res) => res.data);
  return response;
}

export async function editUserPassword(EditUserPassword: EditUserPassword) {
  const response = await axiosPrivate
    .put("/api/v1/user/editPassword", EditUserPassword)
    .then((res) => res.data);
  return response;
}
