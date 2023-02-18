import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Body,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  ComentIcon,
  RetweetIcon,
  LikeIcon,
  CustomAvatar,
} from "./styles";
import { TweetInfo } from "@/Data/Type/Tweet/Tweet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomModal from "@/Components/Modal";
import AddReplyModal from "@/Components/ModalComponent/AddReplyModal";
import { like, retweet } from "@/Service/Tweet/TweetService";

interface TweetProps {
  tweetInfo: TweetInfo;
}

const Tweet = (props: TweetProps) => {
  const { tweetInfo } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onClickShowUserProfile = () => {
    navigate("/profile/" + tweetInfo.userInfo.userName);
  };

  const onClickTweetDetail = () => {
    navigate("/detail/");
  };

  const onClickRetweet = () => {
    retweet(tweetInfo.tweetId).then((res) => {
      alert("리트윗이 완료되었습니다.");
      window.location.reload();
    });
  };

  const onClickLike = () => {
    like(tweetInfo.tweetId).then(() => {
      alert("좋아요 처리가 완료되었습니다.");
      window.location.reload();
    });
  };

  return (
    <Container>
      {/* <Retweeted>
        <RetweetIcon />
        Wassup
      </Retweeted> */}
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

          <Icons>
            <Status onClick={handleClickOpen}>
              <ComentIcon />
              {tweetInfo.repliesCount}
            </Status>

            <Status onClick={onClickRetweet}>
              <RetweetIcon />
              {tweetInfo.retweetsCount}
            </Status>

            <Status onClick={onClickLike}>
              <LikeIcon />
              {tweetInfo.likedTweetsCount}
            </Status>
          </Icons>
        </Content>
      </Body>
      <CustomModal
        open={open}
        onClose={handleClose}
        children={<AddReplyModal tweetInfo={tweetInfo} />}
      />
    </Container>
  );
};

export default Tweet;
