import {
  FollowButton,
  FollowSuggestionAvatar,
  FollowSuggestionContainer,
  FollowSuggestionInfo,
} from "@/Styles/Page/MainPage/style";
import React from "react";

interface Props {
  name: string;
  nickname: string;
}

const FollowSugestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <FollowSuggestionContainer>
      <div>
        <FollowSuggestionAvatar>
          <img
            src="https://twitter.clone.swj-dev.p-e.kr/cdn/tweetImage/2023-01-09-2cb65775-e974-228d-e273-5f8eccd557e8-.png"
            alt=""
          />
        </FollowSuggestionAvatar>

        <FollowSuggestionInfo>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </FollowSuggestionInfo>
      </div>

      <FollowButton outlined>follow</FollowButton>
    </FollowSuggestionContainer>
  );
};

export default FollowSugestion;
