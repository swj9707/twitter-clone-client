import Tweet from "@/Components/Tweet";
import Tweetbox from "@/Components/Tweetbox";
import { Container, Header } from "./styles";
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
      <Tweet />
      <Tweet />
      <Tweet />
    </Container>
  );
};

export default MainHome;
