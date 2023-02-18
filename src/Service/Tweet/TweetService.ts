import { CustomAxios } from "../Api/CustomAxios";
import {
  UpdateTweet,
  DeleteTweet,
  TweetRequest,
} from "@/Data/Type/Tweet/Tweet";
import { BaseResponse } from "@/Data/Type/BaseResponse";
import {
  ReadAllTweetsResponse,
  ReadTweetsResponse,
  RetweetResponse,
  TweetResponse,
} from "@/Data/Type/Tweet/TweetRes";

export async function createTweet(request: TweetRequest) {
  const response: BaseResponse = await CustomAxios.post(
    "/api/v1/tweet/create",
    request
  ).then((res) => res.data);
  return response;
}

export async function createReplyTweet(request: TweetRequest) {
  const response: BaseResponse = await CustomAxios.post(
    "/api/v1/tweet/reply",
    request
  ).then((res) => res.data);
  return response;
}

export async function retweet(tweetId: number) {
  const response: RetweetResponse = await CustomAxios.get(
    "/api/v1/tweet/retweet",
    {
      params: { tweetId: tweetId },
    }
  ).then((res) => res.data);
  return response;
}

export async function like(tweetId: number) {
  const response: TweetResponse = await CustomAxios.get("/api/v1/tweet/like", {
    params: { tweetId: tweetId },
  }).then((res) => res.data);
  return response;
}

export async function readTweets(pageNo: number) {
  const response: ReadTweetsResponse = await CustomAxios.get(
    "/api/v1/tweet/read",
    {
      params: { page: pageNo },
    }
  ).then((res) => res.data);
  return response;
}

export async function readUserTweets(pageNo: number, userName: string) {
  const response: ReadTweetsResponse = await CustomAxios.get(
    "/api/v1/tweet/user",
    {
      params: { page: pageNo, userName: userName },
    }
  ).then((res) => res.data);
  return response;
}

export async function updateTweet(request: UpdateTweet) {
  const response: BaseResponse = await CustomAxios.put(
    "/api/v1/tweet/update",
    request
  ).then((res) => res.data);
  return response;
}

export async function deleteTweet(request: DeleteTweet) {
  const response: BaseResponse = await CustomAxios.put(
    "/api/v1/tweet/delete",
    request
  ).then((res) => res.data);
  return response;
}
