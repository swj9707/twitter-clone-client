import Tweet from "@/Components/Tweet";
import Tweetbox from "@/Components/Tweetbox";
import { Container, Header } from "./styles";

const MainHome: React.FC = () => {
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
