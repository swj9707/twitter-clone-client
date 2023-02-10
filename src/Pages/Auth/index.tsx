import LoginContainer from "@/Components/LoginContainer";
import RegisterContainer from "@/Components/RegisterContainer";
import { useState } from "react";
import twitterlogin from "@/Assets/twitter-auth.jpg";
import logo from "@/Assets/twitter-logo-2.png";
import {
  Container,
  AuthContainer,
  BackgroundContainer,
  BackgroundImage,
  MainContainer,
} from "./style";
import CustomModal from "@/Components/Modal";
import LoginFormModal from "@/Components/ModalComponent/LoginFormModal";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleLogin = () => setIsLogin(!isLogin);

  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <MainContainer>
        <BackgroundContainer>
          <BackgroundImage src={twitterlogin} alt="bg" />
        </BackgroundContainer>
        <AuthContainer>
          <div className="w-full h-auto">
            <div className="h-24">
              <img src={logo} alt="logo" className="h-full" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold my-6 md:my-12">
              Twitter Clone Project
            </h1>
            {isLogin && (
              <LoginContainer
                handleOpen={handleOpen}
                toggleLogin={toggleLogin}
              />
            )}
            {!isLogin && (
              <RegisterContainer
                handleOpen={handleOpen}
                toggleLogin={toggleLogin}
              />
            )}
          </div>
        </AuthContainer>
        <CustomModal
          open={open}
          onClose={handleClose}
          children={<LoginFormModal isLogin={isLogin} />}
        ></CustomModal>

        {/* 
    <Loading loading={loading} /> */}
      </MainContainer>
    </Container>
  );
};

export default AuthPage;
