import React from "react";

import Tweet from "../Tweets/Tweet";

import { ButtonContainer, Container, Tab, Tweets } from "./styles";

const Feed: React.FC = () => {
  return (
    <Container>
      <ButtonContainer>
        <Tab>Tweets</Tab>
        <Tab>Tweets & replies</Tab>
        <Tab>Likes</Tab>
      </ButtonContainer>
      <Tweets>
        {/* <Tweet />
        <Tweet />
        <Tweet />
        <Tweet /> */}
      </Tweets>
    </Container>
  );
};

export default Feed;
