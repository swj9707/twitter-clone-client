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
import { useState, useCallback } from "react";
import Tweetbox from "@/Components/Tweetbox";
import Modal from "@/Components/Modal";

const AppSidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

  const [open, setOpen] = useState(false);

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
        <ExitIcon />
      </Botside>
      <Modal open={open} onClose={handleClose} children={<Tweetbox />} />
    </Container>
  );
};

export default AppSidebar;
