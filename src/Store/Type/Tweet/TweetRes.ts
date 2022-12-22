import { BaseResponse } from "../BaseResponse";
import { TweetDTO } from "./Tweet";
export interface TweetInfo {
  tweetId: number;
}

export interface ReadAllTweetsResponse extends BaseResponse {
  data: TweetDTO[];
}

export interface ReadTweetsResponse extends BaseResponse {
  data: {
    tweets: TweetDTO[];
    size: number;
    number: number;
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
  };
}
