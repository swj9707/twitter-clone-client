import { CustomAxios } from "../Api/CustomAxios";
import {
  CreateTweet,
  UpdateTweet,
  DeleteTweet,
} from "../../Store/Type/Tweet/Tweet";
import {
  ReadAllTweetsResponse,
  ReadTweetsResponse,
  TweetInfo,
  UploadTweetImageTestRes,
} from "../../Store/Type/Tweet/TweetRes";

export async function createTweet(request: CreateTweet) {
  const response: TweetInfo = await CustomAxios.post(
    "/api/v1/tweet/create",
    request
  ).then((res) => res.data);
  return response;
}

export async function uploadTweetImageTest(request: FormData) {
  const response: UploadTweetImageTestRes = await CustomAxios.post(
    "/api/v1/tweet/uploadImage",
    request,
    {
      headers: {
        "Content-Type": "application/form-data",
      },
    }
  ).then((res) => res.data);
  return response;
}

export async function readTweets(pageNo: number) {
  const response: ReadTweetsResponse = await CustomAxios.get(
    "/api/v1/tweet/read",
    { params: { pageNo: pageNo } }
  ).then((res) => res.data);
  return response;
}

export async function readAllTweets() {
  const response: ReadAllTweetsResponse = await CustomAxios.get(
    "/api/v1/tweet/readAll"
  ).then((res) => res.data);
  return response;
}

export async function updateTweet(request: UpdateTweet) {
  const response: TweetInfo = await CustomAxios.put(
    "/api/v1/tweet/update",
    request
  ).then((res) => res.data);
  return response;
}

export async function deleteTweet(request: DeleteTweet) {
  const response: TweetInfo = await CustomAxios.put(
    "/api/v1/tweet/delete",
    request
  ).then((res) => res.data);
  return response;
}
