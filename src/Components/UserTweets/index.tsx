import { Routes, Route, useNavigate, Link } from "react-router-dom";

import { ButtonContainer, Container, Tab } from "./styles";
import UserPageTweets from "./UserPageTweets";

interface props {
  userName: string;
  userId: string;
}

const UserTweets = (prop: props) => {
  const { userName, userId } = prop;
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonContainer>
        <Tab
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/profile/" + userName + "/tweet");
          }}
        >
          Tweets
        </Tab>
        <Tab
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/profile/" + userName + "/reply");
          }}
        >
          Tweets & replies
        </Tab>
        <Tab
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/profile/" + userName + "/likes");
          }}
        >
          Likes
        </Tab>
      </ButtonContainer>
      <Routes>
        <Route
          path="tweet"
          element={<UserPageTweets activeTab={1} userId={userId} />}
        />
        <Route
          path="reply"
          element={<UserPageTweets activeTab={2} userId={userId} />}
        />
        <Route
          path="likes"
          element={<UserPageTweets activeTab={3} userId={userId} />}
        />
      </Routes>
    </Container>
  );
};

export default UserTweets;
