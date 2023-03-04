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
    <div className="outline-none absolute border bg-[#000] top-1/4 left-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/4 origin-center w-2/3 lg:w-1/2 h-auto pt-2 pb-3 rounded-2xl flex flex-col justify-start items-start">
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
    </div>
  );
};

export default AddReplyModal;
