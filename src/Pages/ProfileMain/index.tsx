import ProfilePage from "@/Components/Profile";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Header, BackIcon, ProfileInfo } from "./styles";

const ProfileMain: React.FC = () => {
  const navigate = useNavigate();
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
