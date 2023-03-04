import LoginContainer from "@/Components/Container/LoginContainer";
import RegisterContainer from "@/Components/Container/RegisterContainer";
import { useState } from "react";
import twitterlogin from "@/Assets/twitter-auth.jpg";
import logo from "@/Assets/twitter-logo-2.png";

import CustomModal from "@/Components/Modal";
import LoginFormModal from "@/Components/Modal/ModalComponent/LoginFormModal";
import {
  AuthContainer,
  AuthPageContainer,
  AuthTitle,
  BackgroundContainer,
  BackgroundImage,
  IconContainer,
  MainContainer,
} from "@/Styles/Page/AuthPage/style";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleLogin = () => setIsLogin(!isLogin);

  return (
    <AuthPageContainer>
      <MainContainer>
        <BackgroundContainer>
          <BackgroundImage src={twitterlogin} alt="bg" />
        </BackgroundContainer>
        <AuthContainer>
          <IconContainer>
            <img src={logo} alt="logo" />
          </IconContainer>
          <AuthTitle>Twitter Clone Project</AuthTitle>
          {isLogin && (
            <LoginContainer handleOpen={handleOpen} toggleLogin={toggleLogin} />
          )}
          {!isLogin && (
            <RegisterContainer
              handleOpen={handleOpen}
              toggleLogin={toggleLogin}
            />
          )}
        </AuthContainer>
        <CustomModal
          open={open}
          onClose={handleClose}
          children={<LoginFormModal isLogin={isLogin} />}
        ></CustomModal>
      </MainContainer>
    </AuthPageContainer>
  );
};

export default AuthPage;
