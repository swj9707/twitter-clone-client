import ProfilePage from "@/Components/Profile";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Header, BackIcon, ProfileInfo } from "./styles";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store/Store";

const ProfileMain: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootStore) => state.AuthReducer);

  useEffect(() => {}, []);

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
