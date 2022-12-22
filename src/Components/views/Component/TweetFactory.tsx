import React, { useState } from "react";
import { createTweet } from "../../../Service/Tweet/TweetService";
import { CreateTweet } from "../../../Store/Type/Tweet/Tweet";
import { TwitterUserDTO } from "../../../Store/Type/Auth/Auth";

const TweetFactory = ({ userObj }: { userObj: TwitterUserDTO | null }) => {
  const [tweet, setTweet] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (tweet === "") {
      return;
    }
    const tweetObject: CreateTweet = {
      userId: userObj?.userId,
      tweetContent: tweet,
      tweetImageMeta: "",
    };

    await createTweet(tweetObject)
      .then(() => {
        alert("Tweet이 등록되었습니다.");
        setTweet("");
        window.location.replace("/");
      })
      .catch(() => {
        alert("Tweet 생성 시 에러가 발생하였습니다.");
      });
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "content") {
      setTweet(target.value);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input
            value={tweet}
            onChange={onChange}
            type="text"
            name="content"
            placeholder="What's on your mind?"
            maxLength={120}
          />
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default TweetFactory;
