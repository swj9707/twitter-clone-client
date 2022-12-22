export interface TweetDTO {
  tweetId: number;
  userId: string;
  tweetContent: string;
  tweetImageMeta?: string;
  modified: boolean;
  status: string;
}

export interface CreateTweet {
  userId?: string;
  tweetContent: string;
  tweetImageMeta?: string;
}

export interface UpdateTweet {
  tweetId: number;
  tweetContent: string;
  tweetImageMeta: string;
}

export interface DeleteTweet {
  tweetId: number;
}
