import ProfilePage from "@/Components/Profile";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Header, BackIcon, ProfileInfo } from "./styles";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store/Store";
import { TwitterUserProfile } from "@/Data/Type/User/User";
import { getUserInfo } from "@/Service/User/UserService";

const ProfileMain: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ userName: string }>();
  const [userInfo, setUserInfo] = useState<TwitterUserProfile>();
  const [isMyProfile, setIsMyProfile] = useState(false);

  // useEffect(() => {
  //   if (params.userName) {
  //     getUserInfo(params.userName).then((res) => {
  //       setUserInfo(res.data);
  //       console.log(userInfo);
  //     });
  //   }
  // }, []);

  return (
    <Container>
      <Header>
        <button onClick={() => navigate("/")}>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Wassup</strong>
          <span> 2.345 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
    </Container>
  );
};

export default ProfileMain;
