import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";
import AppSidebar from "@/Components/Sidebar/AppSidebar";
import WidgetBar from "@/Components/Appbar";
import { RootContainer, RootWrapper } from "@/Components/Layout/styles";
import ProfileMain from "@/Pages/ProfileMain";
import MainHome from "@/Pages/Home";
import AuthPage from "@/Pages/Auth/Login";
import FooterMenu from "./FooterMenu";
import SetupPage from "@/Pages/SetupPage";
import TweetDetail from "@/Pages/TweetDetail";
import SignUpPage from "@/Pages/Auth/Signup";
import { useEffect } from "react";
import { getUserInfo } from "@/Service/User/UserService";
import { setUserInfo } from "@/Data/Ducks/User/UserInfoReducer";

const AppRouter = () => {
  const userAuthInfo = useSelector((state: RootStore) => state.AuthReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Router");
    getUserInfo(userAuthInfo.user.userId).then((res) => {
      dispatch(setUserInfo(res));
    });
  }, []);

  return (
    <Router>
      <RootContainer>
        <RootWrapper>
          {userAuthInfo.isLoggedIn ? (
            <>
              <AppSidebar />
              <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/profile/:userName" element={<ProfileMain />} />
                <Route path="/setup" element={<SetupPage />} />
                <Route path="/tweet" element={<TweetDetail />} />
              </Routes>
              <WidgetBar />
              <FooterMenu />
            </>
          ) : (
            <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          )}
        </RootWrapper>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
