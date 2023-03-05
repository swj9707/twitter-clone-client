import {
  UserTweetButtonContainer,
  UserTweetContainer,
  UserTweetTab,
} from "@/Styles/components/Tweet/style";
import { Routes, Route, useNavigate } from "react-router-dom";

import UserPageTweets from "./UserPageTweets";

interface props {
  userName: string;
  userId: string;
}

const UserTweets = (prop: props) => {
  const { userName, userId } = prop;
  const navigate = useNavigate();

  return (
    <UserTweetContainer>
      <UserTweetButtonContainer>
        <UserTweetTab
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/profile/" + userName + "/tweet");
          }}
        >
          Tweets
        </UserTweetTab>
        <UserTweetTab
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/profile/" + userName + "/reply");
          }}
        >
          Tweets & replies
        </UserTweetTab>
        <UserTweetTab
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/profile/" + userName + "/likes");
          }}
        >
          Likes
        </UserTweetTab>
      </UserTweetButtonContainer>
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
    </UserTweetContainer>
  );
};

export default UserTweets;
