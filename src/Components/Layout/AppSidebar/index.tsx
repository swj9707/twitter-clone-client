import {
  CustomAvatar,
  Botside,
  SideBarContainer,
  HomeIcon,
  Logo,
  MenuButton,
  ProfileData,
  ProfileIcon,
  Topside,
  PencilIcon,
  TweetButton,
  DropdownMenu,
  SidebarDropdownButton,
  LogoutIcon,
  UserMenu,
  MenuIcon,
} from "@/Styles/Page/MainPage/style";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
  const funcRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [func, setFunc] = useState(false);

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

  const toggleFunc = () => {
    setFunc(!func);
  };

  useEffect(() => {
    if (!func) return;
    function handleClick(e: any) {
      if (funcRef.current === null) {
        return;
      } else if (!funcRef.current.contains(e.target)) {
        setFunc(false);
      }
    }
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [func]);

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
        <TweetButton onClick={() => handleClickOpen()}>
          <PencilIcon />
          <span>Tweet</span>
        </TweetButton>
      </Topside>
      <Botside>
        {func && (
          <DropdownMenu>
            <SidebarDropdownButton onClick={() => onClickLogout()}>
              <LogoutIcon />
              <span>Logout</span>
            </SidebarDropdownButton>
          </DropdownMenu>
        )}
        <UserMenu onClick={toggleFunc} ref={funcRef}>
          <CustomAvatar src={userInfo.profileImage?.imageUrl} alt="" />
          <ProfileData>
            <strong>{userInfo.userNickname}</strong>
            <span>@{userInfo.userName}</span>
          </ProfileData>
          <MenuIcon />
        </UserMenu>
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
