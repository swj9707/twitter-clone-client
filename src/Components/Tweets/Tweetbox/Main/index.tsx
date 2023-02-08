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
import { ChangeEvent, useCallback, useState } from "react";
import { ImageObj, TweetRequest } from "@/Data/Type/Tweet/Tweet";
import ProfileAvatar from "../ProfileAvatar";
import UploadImages from "../UploadImage";
import AddTweetImage from "../AddTweetImage";
import { createTweet } from "@/Service/Tweet/TweetService";
import { UploadImageRes } from "@/Data/Type/Image/ImageRes";
import { uploadImage } from "@/Service/Image/ImageService";
import { ImageInfo } from "@/Data/Type/Image/Image";

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

  const onClickSubmit = async () => {
    let request: TweetRequest = {
      tweetContent: tweet,
      tweetImages: [],
    };

    for (const element of images) {
      const file = element.file;
      const res: UploadImageRes = await uploadImage(file);
      const tweetImageData: ImageInfo = res.data;
      request.tweetImages.push(tweetImageData);
    }

    await createTweet(request)
      .then(() => {
        alert("트윗이 등록되었습니다.");
        setTweet("");
        setImages([]);
      })
      .catch(() => {
        alert("트윗 생성 과정에서 오류가 발생했습니다.");
        setTweet("");
        setImages([]);
      });
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
