export interface BaseResponse {
  status: string;
  message: string;
}

export interface FailureResponse {
  status: string;
  data: string;
  message: string;
}
