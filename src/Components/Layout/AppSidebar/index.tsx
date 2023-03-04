import {
  CustomAvatar,
  Botside,
  SideBarContainer,
  ExitIcon,
  HomeIcon,
  Logo,
  MenuButton,
  ProfileData,
  ProfileIcon,
  Topside,
  PencilIcon,
  TweetButton,
} from "@/Styles/Page/MainPage/style";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomModal from "@/Components/Modal";
import { requestLogout } from "@/Service/Auth/AuthService";
import { logout } from "@/Data/Ducks/Auth/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";
import AddTweetModal from "@/Components/Modal/ModalComponent/AddTweetModal";

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
    <SideBarContainer>
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
            navigate("/profile/" + userInfo.userName + "/tweet");
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
      <CustomModal
        open={open}
        onClose={handleClose}
        children={<AddTweetModal />}
      />
    </SideBarContainer>
  );
};

export default AppSidebar;