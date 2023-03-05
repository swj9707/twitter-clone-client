import ProfilePage from "@/Pages/ProfilePage";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  MainContainer,
  MainHeader,
  BackIcon,
  ProfileInfo,
} from "@/Styles/Page/ProfilePage/style";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";
import { TwitterUserProfile } from "@/Data/Type/User/User";
import { getUserProfile } from "@/Service/User/UserService";

const ProfileMain = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);

  useEffect(() => {
    if (params.userName) {
      getUserProfile(params.userName).then((res) => {
        setUserProfile(res.data.userProfile);
        setCountOfTweets(res.data.countOfTweet);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer>
      <MainHeader>
        <button onClick={() => navigate("/")}>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>{userProfile?.userNickname}</strong>
          <span> {countOfTweets} Tweets</span>
        </ProfileInfo>
      </MainHeader>
      {userProfile && (
        <ProfilePage isMyProfile={isMyProfile} userProfile={userProfile} />
      )}
    </MainContainer>
  );
};

export default ProfileMain;
