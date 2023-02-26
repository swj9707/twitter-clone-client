import { useState } from "react";

import { ButtonContainer, Container, Tab } from "./styles";
import UserPageTweets from "./UserPageTweets";

const UserTweets = () => {
  const [activeTab, setActiveTab] = useState(1);

  const onClickMenu = (menuNo: number) => {
    window.scrollTo(0, 0);
    setActiveTab(menuNo);
  };

  return (
    <Container>
      <ButtonContainer>
        <Tab onClick={() => onClickMenu(1)}>Tweets</Tab>
        <Tab onClick={() => onClickMenu(2)}>Tweets & replies</Tab>
        <Tab onClick={() => onClickMenu(3)}>Likes</Tab>
      </ButtonContainer>
      <UserPageTweets activeTab={activeTab} />
    </Container>
  );
};

export default UserTweets;
