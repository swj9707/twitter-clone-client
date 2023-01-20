import Tweet from "@/Components/Tweets/Tweet";
import Tweetbox from "@/Components/Tweets/Tweetbox/Main";
import { Container, Header, TweetContainer } from "./styles";
import { useSelector } from "react-redux";
import { RootStore } from "@/Store/Data/Store";

const MainHome = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
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
