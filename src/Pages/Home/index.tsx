import Tweet from "@/Components/Tweets/Tweet";
import Tweetbox from "@/Components/Tweets/Tweetbox/Main";
import { Container, Header, TweetContainer } from "./styles";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";
import { useEffect, useState } from "react";
import { readAllTweets } from "@/Service/Tweet/TweetService";
import { TweetInfo } from "@/Data/Type/Tweet/Tweet";

const MainHome = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  const [pageNo, setPageNo] = useState(0);
  const [tweets, setTweets] = useState<TweetInfo[]>([]);

  useEffect(() => {
    readAllTweets().then((res) => {
      const tweetData: TweetInfo[] = res.data;
      setTweets(tweets.concat(tweetData));
    });
  }, []);

  return (
    <Container>
      <Header>
        <h2>Home</h2>
      </Header>
      <Tweetbox />
      <TweetContainer>
        {tweets.map((tweet) => {
          return <Tweet key={tweet.tweetId} tweetInfo={tweet} />;
        })}
      </TweetContainer>
    </Container>
  );
};

export default MainHome;
