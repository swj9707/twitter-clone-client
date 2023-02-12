import ProfilePage from "@/Components/Profile";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Header, BackIcon, ProfileInfo } from "./styles";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";
import { TwitterUserProfile } from "@/Data/Type/User/User";
import { getUserProfile } from "@/Service/User/UserService";

const ProfileMain: React.FC = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootStore) => state.UserInfoReducer);

  const params = useParams<{ userName: string }>();
  const [userProfile, setUserProfile] = useState<TwitterUserProfile>();
  const [countOfTweets, setCountOfTweets] = useState(0);
  const [isMyProfile, setIsMyProfile] = useState<boolean>(false);

  useEffect(() => {
    if (params.userName === userInfo.userName) {
      setIsMyProfile(true);
    }
  }, [userProfile]);

  useEffect(() => {
    if (params.userName) {
      getUserProfile(params.userName).then((res) => {
        console.log(res);
        setUserProfile(res.data.userProfile);
        setCountOfTweets(res.data.countOfTweet);
      });
    }
  }, []);

  return (
    <Container>
      <Header>
        <button onClick={() => navigate("/")}>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>{userProfile?.userNickname}</strong>
          <span> {countOfTweets} Tweets</span>
        </ProfileInfo>
      </Header>
      {userProfile && (
        <ProfilePage isMyProfile={isMyProfile} userProfile={userProfile} />
      )}
    </Container>
  );
};

export default ProfileMain;
