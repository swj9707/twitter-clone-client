import LoginContainer from "@/Components/LoginContainer";
import RegisterContainer from "@/Components/RegisterContainer";
import { useState } from "react";
import twitterlogin from "@/Assets/twitter-auth.jpg";
import logo from "@/Assets/twitter-logo-2.png";

const AuthPageTest = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleLogin = () => setIsLogin(!isLogin);
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full h-full bg-white transition delay-75 duration-300 dark:bg-black ">
      <div className="h-full w-full flex flex-col lg:flex-row-reverse relative">
        <div className="h-full w-full lg:w-1/2 px-8 py-16 flex flex-col">
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
        </div>
        <div className="h-full w-full lg:w-1/2 ">
          <img
            src={twitterlogin}
            alt="bg"
            className="h-full w-full object-cover"
          />
        </div>
        {/* <LoginFormModal
      isLogin={isLogin}
      handleClose={handleClose}
      open={open}
    />
    <Loading loading={loading} /> */}
      </div>
    </div>
  );
};

export default AuthPageTest;
