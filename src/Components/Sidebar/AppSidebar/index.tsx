import {
  CustomAvatar,
  Botside,
  Container,
  ExitIcon,
  HomeIcon,
  Logo,
  MenuButton,
  ProfileData,
  ProfileIcon,
  Topside,
  PencilIcon,
  TweetButton,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Tweetbox from "@/Components/Tweets/Tweetbox/Main";
import CustomModal from "@/Components/Modal";
import { requestLogout } from "@/Service/Auth/AuthService";
import { logout } from "@/Data/Ducks/Auth/AuthReducer";
import { LogoutResponse } from "@/Data/Type/Auth/AuthRes";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";

const AppSidebar = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootStore) => state.UserInfoReducer);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const onClickLogout = () => {
    requestLogout().then(() => {
      alert("로그아웃 되었습니다.");
      dispatch(logout());
      navigate("/");
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Topside>
        <Logo onClick={() => navigate("/")} />
        <MenuButton
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeIcon />
          <span> Home </span>
        </MenuButton>
        <MenuButton
          onClick={() => {
            navigate("/profile/" + userInfo.userName);
          }}
        >
          <ProfileIcon />
          <span> Profile </span>
        </MenuButton>
        <TweetButton onClick={handleClickOpen}>
          <PencilIcon />
          <span>Tweet</span>
        </TweetButton>
      </Topside>
      <Botside>
        <CustomAvatar src={userInfo.profileImage?.imageUrl} alt="" />
        <ProfileData>
          <strong>{userInfo.userNickname}</strong>
          <span>@{userInfo.userName}</span>
        </ProfileData>
        <ExitIcon onClick={onClickLogout} />
      </Botside>
      <CustomModal open={open} onClose={handleClose} children={<Tweetbox />} />
    </Container>
  );
};

export default AppSidebar;
