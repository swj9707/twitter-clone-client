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
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7THYTvyf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/oj0mjcfvpgzkf18w42n8.png" />
        <Avatar>
          <img src="https://twitter.clone.swj-dev.p-e.kr/cdn/tweetImage/2023-01-09-2cb65775-e974-228d-e273-5f8eccd557e8-.png" />
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
