export interface BaseResponse<T = any> {
  status: string;
  data: T;
  message: string;
}

export interface FailureResponse {
  status: string;
  data: string;
  message: string;
}
