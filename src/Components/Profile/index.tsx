import React, { useState } from "react";
import Modal from "@/Components/Modal";
import Feed from "../Feed";
import {
  Container,
  Banner,
  CustomAvatar,
  ProfileData,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";
import ProfileEdit from "../ProfileEdit";
import { ImageInfo } from "@/Data/Type/Image/Image";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";

interface profilePageProps {
  isMyProfile: boolean;
  profileImage: ImageInfo | undefined;
  backgroundImage: ImageInfo | undefined;
}

const ProfilePage = (props: profilePageProps) => {
  const userInfo = useSelector((state: RootStore) => state.UserInfoReducer);
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
        <img src={props.backgroundImage?.imageUrl} alt="" />
        <CustomAvatar src={props.profileImage?.imageUrl} alt="" />
      </Banner>

      <ProfileData>
        {props.isMyProfile && (
          <EditButton onClick={handleClickOpen} outlined>
            Edit Profile
          </EditButton>
        )}

        <h1>{userInfo.userNickname}</h1>
        <h2>@{userInfo.userName}</h2>

        <ul>
          <li>
            <CakeIcon />
            Last Login {userInfo.lastLogin}
          </li>
        </ul>

        <Followage>
          <span>
            <strong>0</strong> following
          </span>
          <span>
            <strong>0</strong> followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
      <Modal open={open} onClose={handleClose} children={<ProfileEdit />} />
    </Container>
  );
};

export default ProfilePage;
