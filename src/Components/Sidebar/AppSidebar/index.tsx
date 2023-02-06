import {
  Avatar,
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
import { logout } from "@/Data/Slices/AuthReducer";
import { LogoutResponse } from "@/Data/Type/Auth/AuthRes";
import { useDispatch } from "react-redux";

const AppSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const onClickLogout = () => {
    requestLogout().then((res: LogoutResponse) => {
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
        {/* 
        <MenuButton>
          <BellIcon />
          <span> Notification </span>
        </MenuButton> */}

        {/* <MenuButton>
          <EmailIcon />
          <span> Message </span>
        </MenuButton> */}
        <MenuButton onClick={() => navigate("/profile")}>
          <ProfileIcon />
          <span> Profile </span>
        </MenuButton>
        {/* <MenuButton onClick={() => navigate("/setup")}>
          <MoreIcon />
          <span> More </span>
        </MenuButton> */}
        {/* <TweetButton onClick={onClickToggleModal}>
          <PencilIcon />
          <span>Tweet</span>
        </TweetButton> */}
        <TweetButton onClick={handleClickOpen}>
          <PencilIcon />
          <span>Tweet</span>
        </TweetButton>
      </Topside>
      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Test User</strong>
          <span>@testuser</span>
        </ProfileData>
        <ExitIcon onClick={onClickLogout} />
      </Botside>
      <CustomModal open={open} onClose={handleClose} children={<Tweetbox />} />
    </Container>
  );
};

export default AppSidebar;
