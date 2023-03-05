import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";
import AppSidebar from "@/Components/Layout/AppSidebar";
import WidgetBar from "@/Components/Appbar";
import ProfileMain from "@/Pages/ProfileMain";
import MainHome from "@/Pages/Home";
import FooterMenu from "./Container/FooterMenu";
import SetupPage from "@/Pages/SetupPage";
import TweetDetail from "@/Pages/TweetDetail";
import { useEffect } from "react";
import { getUserInfo } from "@/Service/User/UserService";
import { setUserInfo } from "@/Data/Ducks/User/UserInfoReducer";
import AuthPage from "@/Pages/Auth";
import { RootContainer, RootWrapper } from "@/Styles/Page/Root";

const AppRouter = () => {
  const userAuthInfo = useSelector((state: RootStore) => state.AuthReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userAuthInfo.isLoggedIn !== false) {
      getUserInfo(userAuthInfo.user.userId).then((res) => {
        dispatch(setUserInfo(res));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <Route path="/profile/:userName/*" element={<ProfileMain />} />
                <Route path="/setup" element={<SetupPage />} />
                <Route path="/tweet/:tweetId" element={<TweetDetail />} />
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
