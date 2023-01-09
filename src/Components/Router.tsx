import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../Store/Data/Store";
import AppSidebar from "@/Components/Sidebar/AppSidebar";
import WidgetBar from "@/Components/Appbar";
import { RootContainer, RootWrapper } from "@/Components/Layout/styles";
import ProfileMain from "../Pages/ProfileMain";
import MainHome from "@/Pages/Home";
import AuthPage from "@/Pages/Auth";

const AppRouter = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  return (
    <Router>
      <RootContainer>
        <RootWrapper>
          {!user.isLoggedIn ? (
            <>
              <AppSidebar />
              <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/Profile" element={<ProfileMain />} />
              </Routes>
              <WidgetBar />
            </>
          ) : (
            <Routes>
              <Route path="/" element={<AuthPage />} />
            </Routes>
          )}
        </RootWrapper>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
