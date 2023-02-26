import { BaseResponse } from "@/Data/Type/BaseResponse";
import { CustomAxios } from "../Api/CustomAxios";
import { AxiosResponse } from "axios";

export async function uploadImage(image: File) {
  const formData = new FormData();
  formData.append("file", image);
  const response: BaseResponse = await CustomAxios.post(
    "/api/v1/image/uploadImage",
    formData,
    {
      headers: {
        "Content-Type": "application/form-data",
      },
    }
  ).then((res: AxiosResponse) => res.data);
  return response;
}
