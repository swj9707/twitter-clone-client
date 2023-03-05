/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Header } from "@/Styles/Page/TweetDetailPage/styles";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { TweetInfo } from "@/Data/Type/Tweet/Tweet";
import { getReplies, getTweet } from "@/Service/Tweet/TweetService";
import Tweet from "@/Components/Tweets/Tweet";
import { useInView } from "react-intersection-observer";
import Spinner from "@/Components/Amination/Spinner";

const TweetDetail = () => {
  const params = useParams<{ tweetId: string }>();
  const [tweetInfo, setTweetInfo] = useState<TweetInfo>();
  const [lastPage, setLastPage] = useState(false);
  const [replies, setReplies] = useState<TweetInfo[]>([]);
  const [pageNo, setPageNo] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getRepliesCallback = useCallback(async () => {
    setLoading(true);
    if (!lastPage) {
      getReplies(pageNo, Number(params.tweetId)).then((res) => {
        const result: TweetInfo[] = res.data.tweets;
        const lastPage = res.data.last;
        setLastPage(lastPage);
        setReplies([...replies, ...result]);
      });
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);

  useEffect(() => {
    getRepliesCallback();
  }, [getRepliesCallback]);

  useEffect(() => {
    if (!lastPage) {
      if (inView && !loading) {
        setPageNo((prev) => prev + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, loading]);

  useEffect(() => {
    getTweet(Number(params.tweetId))
      .then((res) => {
        setTweetInfo(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <Container>
      <Header>
        <h2>Tweet</h2>
      </Header>
      {tweetInfo && <Tweet tweetInfo={tweetInfo} isReadOnly={true} />}
      <div>
        {replies.length !== 0 ? (
          <>
            {replies.map((tweet, idx) =>
              replies.length - 1 === idx ? (
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
          <div className="w-full h-full flex-1 flex justify-center items-center mt-8">
            등록된 댓글이 없습니다.
          </div>
        )}
      </div>
    </Container>
  );
};

export default TweetDetail;
