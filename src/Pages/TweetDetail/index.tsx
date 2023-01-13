import TweetContent from "@/Components/TweetContent";
import { Container, Header } from "./styles";

const TweetDetail = () => {
  return (
    <Container>
      <Header>
        <h2>Tweet</h2>
      </Header>
      <TweetContent />
    </Container>
  );
};

export default TweetDetail;
