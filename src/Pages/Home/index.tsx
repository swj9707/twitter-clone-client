import Tweet from "@/Components/Tweets/Tweet";
import Tweetbox from "@/Components/Tweets/Tweetbox/Main";
import { Container, Header, TweetContainer } from "./styles";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store/Store";
import { useEffect } from "react";
import { readAllTweets } from "@/Service/Tweet/TweetService";

const MainHome = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);

  useEffect(() => {
    readAllTweets();
  }, []);

  return (
    <Container>
      <Header>
        <h2>Home</h2>
      </Header>
      <Tweetbox />
      <TweetContainer>
        <Tweet />
      </TweetContainer>
    </Container>
  );
};

export default MainHome;
