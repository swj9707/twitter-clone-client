import { axiosPrivate } from "../Api/CustomAxios";
import {
  CreateTweet,
  UpdateTweet,
  DeleteTweet,
} from "../../Store/Type/Tweet/Tweet";
import {
  ReadAllTweetsResponse,
  ReadTweetsResponse,
  TweetInfo,
} from "../../Store/Type/Tweet/TweetRes";

export async function createTweet(request: CreateTweet) {
  const response: TweetInfo = await axiosPrivate
    .post("/api/v1/tweet/create", request)
    .then((res) => res.data);
  return response;
}

export async function readTweets(pageNo: number) {
  const response: ReadTweetsResponse = await axiosPrivate
    .get("/api/v1/tweet/read", { params: { pageNo: pageNo } })
    .then((res) => res.data);
  return response;
}

export async function readAllTweets() {
  const response: ReadAllTweetsResponse = await axiosPrivate
    .get("/api/v1/tweet/readAll")
    .then((res) => res.data);
  return response;
}

export async function updateTweet(request: UpdateTweet) {
  const response: TweetInfo = await axiosPrivate
    .put("/api/v1/tweet/update", request)
    .then((res) => res.data);
  return response;
}

export async function deleteTweet(request: DeleteTweet) {
  const response: TweetInfo = await axiosPrivate
    .put("/api/v1/tweet/delete", request)
    .then((res) => res.data);
  return response;
}
