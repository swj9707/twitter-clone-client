import {
  Container,
  Content,
  FileIcon,
  Footer,
  FooterAddForm,
  FooterWrapper,
  TextareaWrapper,
  TweetBoxButton,
  TweetTextArea,
} from "./styles";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { ImageObj } from "@/Store/Type/Tweet/Tweet";
import ProfileAvatar from "../ProfileAvatar";
import UploadImages from "../UploadImage";
import AddTweetImage from "../AddTweetImage";

const MAX_LENGTH = 120;
const MAX_IMAGE = 4;

const Tweetbox = () => {
  const [tweet, setTweet] = useState("");
  const [images, setImages] = useState<ImageObj[]>([]);

  const imageCount = images.length;

  const textarea = useRef();

  const removeImage = useCallback(
    (src: string) => {
      setImages((prev) => prev.filter((obj) => obj.src !== src));
    },
    [images]
  );

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value);
  };

  const onClickSubmit = () => {
    //트윗 데이터 생성
    //이미지 데이터 묶음 생성
    //그 담부터??
  };

  return (
    <Container>
      <Content>
        <ProfileAvatar />
        <TextareaWrapper>
          <TweetTextArea
            onChange={onChange}
            placeholder={"What's on your mind?"}
            value={tweet}
            maxLength={120}
          />
        </TextareaWrapper>
      </Content>
      <AddTweetImage images={images} removeImage={removeImage} />
      <Footer>
        <FooterWrapper>
          <UploadImages imageCount={imageCount} onChangeImages={setImages} />
        </FooterWrapper>
        <FooterAddForm>
          <TweetBoxButton>Tweet</TweetBoxButton>
        </FooterAddForm>
      </Footer>
    </Container>
  );
};

export default Tweetbox;
