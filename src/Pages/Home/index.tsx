import Tweet from "@/Components/Tweets/Tweet";
import Tweetbox from "@/Components/Tweets/Tweetbox/Main";
import { Container, Header, TweetContainer } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { readTweets } from "@/Service/Tweet/TweetService";
import { TweetInfo } from "@/Data/Type/Tweet/Tweet";
import { useInView } from "react-intersection-observer";

const MainHome = () => {
  const [pageNo, setPageNo] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [tweets, setTweets] = useState<TweetInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getTweets = useCallback(async () => {
    setLoading(true);
    readTweets(pageNo).then((res) => {
      const result: TweetInfo[] = res.data.tweets;
      const lastPage = res.data.last;
      setLastPage(lastPage);
      setTweets(tweets.concat(result));
    });
    setLoading(false);
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
      <Header>
        <h2>Home</h2>
      </Header>
      <Tweetbox />
      <TweetContainer>
        {tweets.map((tweet, idx) =>
          tweets.length - 1 === idx ? (
            <>
              <Tweet key={tweet.tweetId} tweetInfo={tweet} />
              <span key={idx} ref={ref}>
                마지막 페이지입니다.
              </span>
            </>
          ) : (
            <Tweet key={tweet.tweetId} tweetInfo={tweet} />
          )
        )}
      </TweetContainer>
    </Container>
  );
};

export default MainHome;
