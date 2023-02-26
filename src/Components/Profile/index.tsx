import React, { useState } from "react";
import Modal from "@/Components/Modal";
import UserTweets from "../UserTweets";
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
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";
import { TwitterUserProfile } from "@/Data/Type/User/User";

interface profilePageProps {
  isMyProfile: boolean;
  userProfile: TwitterUserProfile;
}

const ProfilePage = (props: profilePageProps) => {
  const { isMyProfile, userProfile } = props;
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
        <img src={userProfile.backgroundImage?.imageUrl} alt="" />
        <CustomAvatar src={userProfile.profileImage?.imageUrl} alt="" />
      </Banner>

      <ProfileData>
        {isMyProfile && (
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
            <strong>{userProfile.followingCount}</strong> following
          </span>
          <span>
            <strong>{userProfile.followerCount}</strong> followers
          </span>
        </Followage>
      </ProfileData>
      <UserTweets />
      <Modal open={open} onClose={handleClose} children={<ProfileEdit />} />
    </Container>
  );
};

export default ProfilePage;
