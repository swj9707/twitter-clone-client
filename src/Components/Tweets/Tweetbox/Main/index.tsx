import {
  Container,
  Content,
  Footer,
  FooterAddForm,
  FooterWrapper,
  TextareaWrapper,
  TweetBoxButton,
  TweetTextArea,
} from "./styles";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { ImageObj, TweetImage, TweetRequest } from "@/Data/Type/Tweet/Tweet";
import ProfileAvatar from "../ProfileAvatar";
import UploadImages from "../UploadImage";
import AddTweetImage from "../AddTweetImage";
import { createTweet, uploadTweetImage } from "@/Service/Tweet/TweetService";

const Tweetbox = () => {
  const [tweet, setTweet] = useState("");
  const [images, setImages] = useState<ImageObj[]>([]);

  const imageCount = images.length;

  const removeImage = useCallback((src: string) => {
    setImages((prev) => prev.filter((obj) => obj.src !== src));
  }, []);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value);
  };

  const onClickSubmit = () => {
    let result: Array<TweetImage> = [];
    let request: TweetRequest = {
      tweetContent: tweet,
      tweetImages: undefined,
    };

    if (images.length !== 0) {
      images.forEach((element) => {
        const file: File = element.file;
        uploadTweetImage(file)
          .then((res) => {
            const image: TweetImage = res.data;
            result.push(image);
          })
          .then(() => {
            request.tweetImages = result;
            createTweet(request);
          })
          .then(() => {
            alert("트윗이 등록되었습니다.");
            setTweet("");
            setImages([]);
          })
          .catch(() => {
            alert("트윗 생성 과정에서 오류가 발생했습니다.");
            return;
          });
      });
    } else {
      createTweet(request)
        .then(() => {
          alert("트윗이 등록되었습니다.");
          setTweet("");
          setImages([]);
        })
        .catch(() => {
          alert("트윗 생성 과정에서 오류가 발생하였습니다.");
        });
    }
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
          <TweetBoxButton onClick={onClickSubmit}>Tweet</TweetBoxButton>
        </FooterAddForm>
      </Footer>
    </Container>
  );
};

export default Tweetbox;
