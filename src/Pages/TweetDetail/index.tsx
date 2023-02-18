import TweetContent from "@/Components/Tweets/TweetContent";
import { Container, Header } from "./styles";
import { useParams } from "react-router-dom";

const TweetDetail = () => {
  const params = useParams();

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
