import {
  Avatar,
  ButtonContainer,
  Container,
  FileIcon,
  ImageContent,
  InputButton,
  TweetBoxButton,
  TweetBoxInput,
} from "./styles";
import { useRef, useState } from "react";

const Tweetbox = () => {
  const [attachment, setAttachment] = useState("");
  const textarea = useRef();

  return (
    <Container>
      <Avatar>
        <img src="https://twitter.clone.swj-dev.p-e.kr/cdn/tweetImage/2023-01-09-2cb65775-e974-228d-e273-5f8eccd557e8-.png" />
      </Avatar>
      <form>
        <TweetBoxInput>
          <textarea
            maxLength={120}
            name="tweet"
            placeholder="Whats' happening?"
            style={{
              resize: "none",
            }}
          ></textarea>
          {/* <input type="text" placeholder="What's happening?" /> */}
          {attachment && <ImageContent></ImageContent>}
          <ButtonContainer>
            <InputButton>
              <FileIcon />
            </InputButton>
            <TweetBoxButton>Tweet</TweetBoxButton>
          </ButtonContainer>
        </TweetBoxInput>
      </form>
    </Container>
  );
};

export default Tweetbox;
