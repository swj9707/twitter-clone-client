import { ImageInfo } from "../Image/Image";

export interface TweetDTO {
  tweetId: number;
  userId: string;
  tweetContent: string;
  tweetImageMeta?: string;
  modified: boolean;
  status: string;
}

export interface TweetImageMeta {
  type: string;
  name: string;
  size: number;
}

export interface CreateTweet {
  tweetContent: string;
  tweetImageMeta?: TweetImageMeta;
}

export interface UpdateTweet {
  tweetId: number;
  tweetContent: string;
  tweetImageMeta?: TweetImageMeta;
}

export interface DeleteTweet {
  tweetId: number;
}

/// 위에 있는건 다 레거시임

export interface ImageObj {
  src: string;
  file: File;
}

export interface TweetRequest {
  tweetContent: string;
  tweetImages: Array<ImageInfo>;
}
