import React, { useCallback, useEffect, useState } from "react";

import Tweet from "../Tweets/Tweet";

import { ButtonContainer, Container, Tab, Tweets } from "./styles";
import { TweetInfo } from "@/Data/Type/Tweet/Tweet";
import { useInView } from "react-intersection-observer";
import { readUserTweets } from "@/Service/Tweet/TweetService";

interface Props {
  userName: string;
}

const Feed = (props: Props) => {
  const [pageNo, setPageNo] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const { userName } = props;
  const [tweets, setTweets] = useState<TweetInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getTweets = useCallback(async () => {
    setLoading(true);
    if (!lastPage) {
      readUserTweets(pageNo, userName).then((res) => {
        console.log(res.data);
        const result: TweetInfo[] = res.data.tweets;
        const lastPage = res.data.last;
        setLastPage(lastPage);
        setTweets([...tweets, ...result]);
      });
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
                <Tweet key={tweet.tweetId} tweetInfo={tweet} />
                <div
                  ref={ref}
                  className="w-full flex-1 flex justify-center items-center"
                >
                  마지막 페이지입니다.
                </div>
              </>
            ) : (
              <Tweet key={tweet.tweetId} tweetInfo={tweet} />
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
