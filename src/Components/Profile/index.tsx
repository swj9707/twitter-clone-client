import React, { useState } from "react";
import Modal from "@/Components/Modal";
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
import ProfileEdit from "../ProfileEdit";

const ProfilePage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Banner>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7THYTvyf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/oj0mjcfvpgzkf18w42n8.png" />
        <Avatar>
          <img src="https://twitter.clone.swj-dev.p-e.kr/cdn/test/testGif.gif" />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton onClick={handleClickOpen} outlined>
          Edit Profile
        </EditButton>

        <h1>Wassup</h1>
        <h2>email@email.com</h2>

        <ul>
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
      <Modal open={open} onClose={handleClose} children={<ProfileEdit />} />
    </Container>
  );
};

export default ProfilePage;
