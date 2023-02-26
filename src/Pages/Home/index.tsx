import Tweet from "@/Components/Tweets/Tweet";
import Tweetbox from "@/Components/Tweets/Tweetbox/Main";
import { Container, Header, TweetContainer } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { readTweets } from "@/Service/Tweet/TweetService";
import { TweetInfo } from "@/Data/Type/Tweet/Tweet";
import { useInView } from "react-intersection-observer";
import Spinner from "@/Components/Spinner";

const MainHome = () => {
  const [pageNo, setPageNo] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [tweets, setTweets] = useState<TweetInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getTweets = useCallback(async () => {
    setLoading(true);
    if (!lastPage) {
      readTweets(pageNo).then((res) => {
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
      <Header>
        <h2>Home</h2>
      </Header>
      <Tweetbox isReply={false} />
      <TweetContainer>
        {tweets.length !== 0 ? (
          <>
            {tweets.map((tweet, idx) =>
              tweets.length - 1 === idx ? (
                <>
                  <Tweet
                    isRetweeted={false}
                    key={tweet.tweetId}
                    tweetInfo={tweet}
                    isReadOnly={false}
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
                  isRetweeted={false}
                  key={tweet.tweetId}
                  tweetInfo={tweet}
                  isReadOnly={false}
                />
              )
            )}
            {loading && <Spinner />}
          </>
        ) : (
          <div className="w-full flex-1 flex justify-center items-center mt-8">
            등록된 Tweet이 없습니다.
          </div>
        )}
      </TweetContainer>
    </Container>
  );
};

export default MainHome;
