import { UserTweetInfo } from "@/Data/Type/Tweet/Tweet";
import {
  readUserTweetsAndRetweets,
  readUsersLikes,
  readUsersRepliesAndRetweets,
} from "@/Service/Tweet/TweetService";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Tweet from "@/Components/Tweets/Tweet";
import { UserTweets } from "@/Styles/components/Tweet/style";

interface Props {
  activeTab: number;
  userId: string;
}

const UserPageTweets = (props: Props) => {
  const { activeTab, userId } = props;

  const [pageNo, setPageNo] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [tweets, setTweets] = useState<UserTweetInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const firstOption = () => {
    readUserTweetsAndRetweets(pageNo, userId).then((res) => {
      const result: UserTweetInfo[] = res.data.tweets;
      const lastPage = res.data.last;
      setLastPage(lastPage);
      setTweets([...tweets, ...result]);
    });
  };

  const secondOption = () => {
    readUsersRepliesAndRetweets(pageNo, userId).then((res) => {
      const result: UserTweetInfo[] = res.data.tweets;
      const lastPage = res.data.last;
      setLastPage(lastPage);
      setTweets([...tweets, ...result]);
    });
  };

  const thirdOption = () => {
    readUsersLikes(pageNo, userId).then((res) => {
      const result: UserTweetInfo[] = res.data.tweets;
      const lastPage = res.data.last;
      setLastPage(lastPage);
      setTweets([...tweets, ...result]);
    });
  };

  const getTweets = useCallback(async () => {
    setLoading(true);
    if (pageNo === -1) {
      setPageNo(0);
    } else {
      if (!lastPage) {
        if (activeTab === 1) {
          firstOption();
        } else if (activeTab === 2) {
          secondOption();
        } else if (activeTab === 3) {
          thirdOption();
        }
      }
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

  useEffect(() => {
    setTweets([]);
    setPageNo(-1);
    setLastPage(false);
  }, [activeTab]);

  return (
    <>
      <UserTweets>
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
      </UserTweets>
    </>
  );
};

export default UserPageTweets;
