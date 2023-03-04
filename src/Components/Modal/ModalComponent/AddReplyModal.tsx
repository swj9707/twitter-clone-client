import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { TweetInfo } from "@/Data/Type/Tweet/Tweet";
import Tweetbox from "../../Tweets/Tweetbox/Main";
import { useNavigate } from "react-router-dom";
import {
  Body,
  Content,
  Description,
  Dot,
  Header,
  ImageContent,
} from "@/Styles/components/Tweet/style";
import { CustomAvatar } from "@/Styles/components/CustomAvator/style";
import { TweetModalContainer } from "@/Styles/components/Modals/style";

interface PropsInter {
  tweetInfo: TweetInfo;
}

const AddReplyModal = (props: PropsInter) => {
  const { tweetInfo } = props;
  const navigate = useNavigate();

  const onClickShowUserProfile = () => {
    navigate("/profile/" + tweetInfo.userInfo.userName + "/tweet");
  };
  return (
    <TweetModalContainer>
      <Body>
        {tweetInfo.userInfo.profileImage ? (
          <CustomAvatar
            onClick={onClickShowUserProfile}
            src={tweetInfo.userInfo.profileImage.imageUrl}
            alt=""
          />
        ) : (
          <CustomAvatar onClick={onClickShowUserProfile} alt="" />
        )}

        <Content>
          <Header>
            <strong onClick={onClickShowUserProfile}>
              {tweetInfo.userInfo.userNickname}
            </strong>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{
                fontSize: "14px",
                color: "#50b7f5",
                marginRight: "5px",
              }}
            />
            <span onClick={onClickShowUserProfile}>
              @{tweetInfo.userInfo.userName}
            </span>
            <Dot />
            <time> {tweetInfo.createdAt}</time>
          </Header>

          <Description>{tweetInfo.tweetContent}</Description>

          <ImageContent>
            {tweetInfo.images.length !== 0 &&
              tweetInfo.images.map((img) => {
                return <img key={img.imageId} src={img.imageUrl} alt="" />;
              })}
          </ImageContent>
        </Content>
      </Body>
      <Tweetbox isReply={true} connectedTweetId={tweetInfo.tweetId} />
    </TweetModalContainer>
  );
};

export default AddReplyModal;
