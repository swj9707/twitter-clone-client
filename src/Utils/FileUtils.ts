import { TweetImageMeta } from "@/Store/Type/Tweet/Tweet";

export function checkImage(file: TweetImageMeta) {
  if (file.size > 1024 * 1024) {
    alert("파일의 크기가 1mb를 초과하였습니다.");
    return false;
  }

  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    alert("이미지 파일이 아닙니다.");
    return false;
  }

  return true;
}
