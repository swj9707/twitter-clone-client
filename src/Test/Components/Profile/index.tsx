import React from "react";
import Feed from "../Feed";
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Wassup</h1>
        <h2>@wassup</h2>

        <p>Junior Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Seoul, Korea
          </li>
          <li>
            <CakeIcon />
            Joined December 2022
          </li>
        </ul>

        <Followage>
          <span>
            <strong>2.564</strong> following
          </span>
          <span>
            <strong>8.965</strong> followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
