import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store/Store";
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

const AppRouter = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  return (
    <Router>
      <RootContainer>
        <RootWrapper>
          {user.isLoggedIn ? (
            <>
              <AppSidebar />
              <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/profile" element={<ProfileMain />} />
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
