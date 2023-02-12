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
} from "./styles";
import { TweetInfo } from "@/Data/Type/Tweet/Tweet";
import { Avatar, styled as MUIStyled } from "@mui/material";

const CustomAvatar = MUIStyled(Avatar)({
  width: "49px",
  height: "49px",
  borderRadius: "50%",
  flexShrink: "0",
  background: "var(--gray)",
  "& img": {
    borderRadius: "50%",
    width: "100%",
    height: "auto",
  },
});

interface TweetProps {
  tweetInfo: TweetInfo;
}

const Tweet = (props: TweetProps) => {
  const { tweetInfo } = props;

  return (
    <Container>
      {/* <Retweeted>
        <RetweetIcon />
        Wassup
      </Retweeted> */}
      <Body>
        {tweetInfo.userInfo.profileImage ? (
          <CustomAvatar src={tweetInfo.userInfo.profileImage.imageUrl} alt="" />
        ) : (
          <CustomAvatar alt="" />
        )}

        <Content>
          <Header>
            <strong>{tweetInfo.userInfo.userNickname}</strong>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{
                fontSize: "14px",
                color: "#50b7f5",
                marginRight: "5px",
              }}
            />
            <span>@{tweetInfo.userInfo.userName}</span>
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
            <Status>
              <ComentIcon />
              {tweetInfo.repliesCount}
            </Status>

            <Status>
              <RetweetIcon />
              {tweetInfo.retweetsCount}
            </Status>

            <Status>
              <LikeIcon />
              {tweetInfo.likedTweetsCount}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
