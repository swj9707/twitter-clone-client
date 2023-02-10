import { BaseResponse } from "../BaseResponse";
import { TweetInfo } from "./Tweet";

export interface ReadAllTweetsResponse extends BaseResponse {
  data: TweetInfo[];
}

export interface UploadTweetImageTestRes extends BaseResponse {
  data: {
    imageName: string;
    uploadDate: string;
  };
}

export interface ReadTweetsResponse extends BaseResponse {
  data: {
    tweets: TweetInfo[];
    size: number;
    number: number;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
  };
}
