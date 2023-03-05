import { BaseResponse } from "../BaseResponse";
import { ImageInfo } from "./Image";

export interface UploadImageRes extends BaseResponse {
  data: ImageInfo;
}
