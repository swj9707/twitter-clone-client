import React, { useCallback, useEffect, useState } from "react";

import Tweet from "../Tweets/Tweet";

import { ButtonContainer, Container, Tab, Tweets } from "./styles";
import { TweetInfo, UserTweetInfo } from "@/Data/Type/Tweet/Tweet";
import { useInView } from "react-intersection-observer";
import {
  readUserTweets,
  readUserTweetsAndRetweets,
} from "@/Service/Tweet/TweetService";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";

const Feed = () => {
  const userAuthInfo = useSelector((state: RootStore) => state.AuthReducer);

  const [pageNo, setPageNo] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [tweets, setTweets] = useState<UserTweetInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getTweets = useCallback(async () => {
    setLoading(true);
    if (!lastPage) {
      readUserTweetsAndRetweets(pageNo, userAuthInfo.user.userId).then(
        (res) => {
          console.log(res.data);
          const result: UserTweetInfo[] = res.data.tweets;
          const lastPage = res.data.last;
          setLastPage(lastPage);
          setTweets([...tweets, ...result]);
        }
      );
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);

  useEffect(() => {
    getTweets();
  }, [getTweets]);

  useEffect(() => {
    if (!lastPage) {
      if (inView && !loading) {
        setPageNo((prev) => prev + 1);
      }
    }
  }, [inView, loading]);

  return (
    <Container>
      <ButtonContainer>
        <Tab>Tweets</Tab>
        <Tab>Tweets & replies</Tab>
        <Tab>Likes</Tab>
      </ButtonContainer>
      <Tweets>
        {tweets.length !== 0 ? (
          tweets.map((tweet, idx) =>
            tweets.length - 1 === idx ? (
              <>
                <Tweet
                  isRetweeted={tweet.isRetweeted}
                  key={idx}
                  tweetInfo={tweet}
                />
                <div
                  ref={ref}
                  className="w-full flex-1 flex justify-center items-center"
                >
                  마지막 페이지입니다.
                </div>
              </>
            ) : (
              <Tweet
                isRetweeted={tweet.isRetweeted}
                key={idx}
                tweetInfo={tweet}
              />
            )
          )
        ) : (
          <div className="w-full flex-1 flex justify-center items-center mt-8">
            등록된 Tweet이 없습니다.
          </div>
        )}
      </Tweets>
    </Container>
  );
};

export default Feed;
