import { ImageInfo } from "../Image/Image";
import { TweetOwnerInfo } from "../User/User";

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

export interface TweetInfo {
  tweetId: number;
  tweetContent: string;
  images: Array<ImageInfo>;
  modified: boolean;
  createdAt: string;
  status: string;
  userInfo: TweetOwnerInfo;
  likedTweetsCount: number;
  retweetsCount: number;
  repliesCount: number;
}

export interface UserTweetInfo {
  tweetId: number;
  tweetContent: string;
  images: Array<ImageInfo>;
  modified: boolean;
  createdAt: string;
  status: string;
  userInfo: TweetOwnerInfo;
  isRetweeted: boolean;
  retweetedDate: string;
  likedTweetsCount: number;
  retweetsCount: number;
  repliesCount: number;
}

export interface ImageObj {
  src: string;
  file: File;
}

export interface TweetData {
  tweetInfo: TweetInfo;
  userInfo: TweetOwnerInfo;
}

export interface TweetRequest {
  tweetId?: number;
  tweetContent: string;
  tweetImages: Array<ImageInfo>;
}
