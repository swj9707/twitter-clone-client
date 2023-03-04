import Tweetbox from "@/Components/Tweets/Tweetbox/Main";
import { TweetModalContainer } from "@/Styles/components/Modals/style";

const AddTweetModal = () => {
  return (
    <TweetModalContainer>
      <Tweetbox isReply={false} />
    </TweetModalContainer>
  );
};

export default AddTweetModal;
