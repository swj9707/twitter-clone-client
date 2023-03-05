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
  OptionIcon,
  RetweetIcon,
  LikeIcon,
  Option,
  Retweeted,
  DropdownContainer,
} from "@/Styles/components/Tweet/style";
import { TweetInfo } from "@/Data/Type/Tweet/Tweet";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CustomModal from "@/Components/Modal";
import { like, retweet } from "@/Service/Tweet/TweetService";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";
import { deleteTweet } from "@/Service/Tweet/TweetService";
import { CustomAvatar } from "@/Styles/components/CustomAvator/style";
import AddReplyModal from "@/Components/Modal/ModalComponent/AddReplyModal";
import DropdownButton from "@/Components/Buttons/DropdownButton";
import { DropdownButtonDiv } from "@/Styles/components/Buttons/style";

interface TweetProps {
  tweetInfo: TweetInfo;
  isRetweeted?: Boolean;
  isReadOnly?: Boolean;
}

const Tweet = (props: TweetProps) => {
  const userInfo = useSelector((state: RootStore) => state.UserInfoReducer);

  const { tweetInfo, isRetweeted, isReadOnly } = props;
  const navigate = useNavigate();

  const funcRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [fun, setFun] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const toggleFunc = () => {
    if (tweetInfo.userInfo.userName === userInfo.userName) setFun(!fun);
  };

  const onClickDeleteTweet = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteTweet({
        tweetId: tweetInfo.tweetId,
      }).then(() => {
        alert("삭제되었습니다.");
        window.location.reload();
      });
    }
  };

  const onClickShowUserProfile = () => {
    window.scrollTo(0, 0);
    navigate("/profile/" + tweetInfo.userInfo.userName + "/tweet");
  };

  const onClickTweetDetail = () => {
    window.scrollTo(0, 0);
    navigate("/tweet/" + tweetInfo.tweetId);
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

  useEffect(() => {
    if (!fun) return;
    function handleClick(e: any) {
      if (funcRef.current === null) {
        return;
      } else if (!funcRef.current.contains(e.target)) {
        setFun(false);
      }
    }
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [fun]);

  return (
    <Container onClick={!isReadOnly ? onClickTweetDetail : undefined}>
      {isRetweeted && (
        <Retweeted>
          <RetweetIcon />
          Wassup
        </Retweeted>
      )}

      <Body>
        {tweetInfo.userInfo.profileImage ? (
          <CustomAvatar
            onClick={(e) => {
              e.stopPropagation();
              onClickShowUserProfile();
            }}
            src={tweetInfo.userInfo.profileImage.imageUrl}
            alt=""
          />
        ) : (
          <CustomAvatar
            onClick={(e) => {
              e.stopPropagation();
              onClickShowUserProfile();
            }}
            alt=""
          />
        )}
        <Content>
          <Header>
            <strong onClick={() => onClickShowUserProfile}>
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
            <span onClick={() => onClickShowUserProfile}>
              @{tweetInfo.userInfo.userName}
            </span>
            <Dot />
            <time> {tweetInfo.createdAt}</time>
            <Option ref={funcRef}>
              <OptionIcon
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFunc();
                }}
              />
              {fun && (
                <DropdownContainer>
                  <DropdownButtonDiv
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickDeleteTweet();
                    }}
                  >
                    Delete Tweet
                  </DropdownButtonDiv>

                  {/* <DropdownButton
                    onClick={() => console.log("Wassup")}
                    text={"Follow"}
                  />
                  <DropdownButton
                    onClick={() => console.log("Wassup2")}
                    text={"Report this Tweet"}
                  /> */}
                </DropdownContainer>
              )}
            </Option>
          </Header>
          <Description>{tweetInfo.tweetContent}</Description>

          <ImageContent>
            {tweetInfo.images.length !== 0 &&
              tweetInfo.images.map((img) => {
                return <img key={img.imageId} src={img.imageUrl} alt="" />;
              })}
          </ImageContent>

          <Icons>
            <Status
              onClick={(e) => {
                e.stopPropagation();
                handleClickOpen();
              }}
            >
              <ComentIcon />
              {tweetInfo.repliesCount}
            </Status>

            <Status
              onClick={(e) => {
                e.stopPropagation();
                onClickRetweet();
              }}
            >
              <RetweetIcon />
              {tweetInfo.retweetsCount}
            </Status>

            <Status
              onClick={(e) => {
                e.stopPropagation();
                onClickLike();
              }}
            >
              <LikeIcon />
              {tweetInfo.likedTweetsCount}
            </Status>
          </Icons>
        </Content>
      </Body>
      <CustomModal
        open={open}
        onClose={() => handleClose}
        children={<AddReplyModal tweetInfo={tweetInfo} />}
      />
    </Container>
  );
};

export default Tweet;
