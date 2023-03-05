import {
  TweetFormContainer,
  TweetFormContent,
  Footer,
  FooterAddForm,
  FooterWrapper,
  TextareaWrapper,
  TweetFormButton,
  TextArea,
} from "@/Styles/components/Tweet/style";
import { ChangeEvent, useCallback, useState } from "react";
import { ImageObj, TweetRequest } from "@/Data/Type/Tweet/Tweet";
import ProfileAvatar from "../ProfileAvatar";
import UploadImages from "../UploadImage";
import AddTweetImage from "../AddTweetImage";
import { createReplyTweet, createTweet } from "@/Service/Tweet/TweetService";
import { UploadImageRes } from "@/Data/Type/Image/ImageRes";
import { uploadImage } from "@/Service/Image/ImageService";
import { ImageInfo } from "@/Data/Type/Image/Image";

interface TweetboxProp {
  isReply: Boolean;
  connectedTweetId?: number;
}

const Tweetbox = (prop: TweetboxProp) => {
  const { isReply, connectedTweetId } = prop;

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

    if (isReply) {
      request.tweetId = connectedTweetId;
    }

    for (const element of images) {
      const file = element.file;
      const res: UploadImageRes = await uploadImage(file);
      const tweetImageData: ImageInfo = res.data;
      request.tweetImages.push(tweetImageData);
    }

    if (!isReply) {
      await createTweet(request)
        .then(() => {
          alert("트윗이 등록되었습니다.");
          setTweet("");
          setImages([]);
          window.location.reload();
        })
        .catch(() => {
          alert("트윗 생성 과정에서 오류가 발생했습니다.");
          setTweet("");
          setImages([]);
          window.location.reload();
        });
    } else {
      await createReplyTweet(request)
        .then(() => {
          alert("트윗이 등록되었습니다.");
          setTweet("");
          setImages([]);
          window.location.reload();
        })
        .catch(() => {
          alert("트윗 생성 과정에서 오류가 발생했습니다.");
          setTweet("");
          setImages([]);
          window.location.reload();
        });
    }
  };

  return (
    <TweetFormContainer>
      <TweetFormContent>
        <ProfileAvatar />
        <TextareaWrapper>
          <TextArea
            onChange={onChange}
            placeholder={"What's on your mind?"}
            value={tweet}
            maxLength={120}
          />
        </TextareaWrapper>
      </TweetFormContent>
      <AddTweetImage images={images} removeImage={removeImage} />
      <Footer>
        <FooterWrapper>
          <UploadImages imageCount={imageCount} onChangeImages={setImages} />
        </FooterWrapper>
        <FooterAddForm>
          <TweetFormButton onClick={onClickSubmit}>Tweet</TweetFormButton>
        </FooterAddForm>
      </Footer>
    </TweetFormContainer>
  );
};

export default Tweetbox;
