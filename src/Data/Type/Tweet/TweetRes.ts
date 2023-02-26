import { BaseResponse } from "../BaseResponse";
import { TweetInfo, UserTweetInfo } from "./Tweet";

export interface ReadAllTweetsResponse extends BaseResponse {
  data: TweetInfo[];
}

export interface TweetResponse extends BaseResponse {
  data: {
    tweetId: number;
  };
}

export interface UploadTweetImageTestRes extends BaseResponse {
  data: {
    imageName: string;
    uploadDate: string;
  };
}

export interface ReadTweetResponse extends BaseResponse {
  data: TweetInfo;
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

export interface ReatUserTweetsResponse extends BaseResponse {
  data: {
    tweets: UserTweetInfo[];
    size: number;
    number: number;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
  };
}

export interface RetweetResponse extends BaseResponse {
  data: {
    result: boolean;
  };
}
