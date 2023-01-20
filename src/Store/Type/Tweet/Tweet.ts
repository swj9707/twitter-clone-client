export interface TweetDTO {
  tweetId: number;
  userId: string;
  tweetContent: string;
  tweetImageMeta?: string;
  modified: boolean;
  status: string;
}

export interface ImageObj {
  src: string;
  file: File;
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
