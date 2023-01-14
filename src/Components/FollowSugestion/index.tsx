import React from "react";
import { Avatar, Container, FollowButton, Info } from "./styles";

interface Props {
  name: string;
  nickname: string;
}

const FollowSugestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar>
          <img src="https://twitter.clone.swj-dev.p-e.kr/cdn/tweetImage/2023-01-09-2cb65775-e974-228d-e273-5f8eccd557e8-.png" />
        </Avatar>

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>follow</FollowButton>
    </Container>
  );
};

export default FollowSugestion;
