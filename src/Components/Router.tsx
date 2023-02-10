import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";
import AppSidebar from "@/Components/Sidebar/AppSidebar";
import WidgetBar from "@/Components/Appbar";
import { RootContainer, RootWrapper } from "@/Components/Layout/styles";
import ProfileMain from "@/Pages/ProfileMain";
import MainHome from "@/Pages/Home";
import FooterMenu from "./FooterMenu";
import SetupPage from "@/Pages/SetupPage";
import TweetDetail from "@/Pages/TweetDetail";
import { useEffect } from "react";
import { getUserInfo } from "@/Service/User/UserService";
import { setUserInfo } from "@/Data/Ducks/User/UserInfoReducer";
import AuthPage from "@/Pages/Auth";

const AppRouter = () => {
  const userAuthInfo = useSelector((state: RootStore) => state.AuthReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userAuthInfo.isLoggedIn !== false) {
      getUserInfo(userAuthInfo.user.userId).then((res) => {
        dispatch(setUserInfo(res));
      });
    }
  }, []);

  return (
    <Router>
      <RootContainer>
        {userAuthInfo.isLoggedIn ? (
          <>
            <RootWrapper>
              <AppSidebar />
              <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/profile/:userName" element={<ProfileMain />} />
                <Route path="/setup" element={<SetupPage />} />
                <Route path="/tweet" element={<TweetDetail />} />
              </Routes>
              <WidgetBar />
              <FooterMenu />
            </RootWrapper>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<AuthPage />} />
          </Routes>
        )}
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
