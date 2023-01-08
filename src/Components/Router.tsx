import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Auth,
  EditProfile,
  FollowerPage,
  Home,
  Profile,
  Signup,
} from "./views/Pages";
import Navigation from "./views/Component/Navigation";
import { RootStore } from "../Store/Data/Store";
import EditPassword from "./views/Pages/EditPassword/EditPassword";
import TestHome from "@/Test/Pages/TestHome";
import TestAuth from "@/Test/Pages/TestAuth";
import AppSidebar from "@/Test/Components/Sidebar/AppSidebar";
import WidgetBar from "@/Test/Components/Appbar";
import { RootContainer, RootWrapper } from "@/Test/Components/Layout/styles";
import ProfileMain from "@/Test/Components/ProfileMain";

const AppRouter = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  return (
    <Router>
      <RootContainer>
        <RootWrapper>
          <AppSidebar />
          {user.isLoggedIn && <Navigation />}
          <Routes>
            {user.isLoggedIn ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/editProfile" element={<EditProfile />} />
                <Route path="/editPassword" element={<EditPassword />} />
                <Route path="/followers" element={<FollowerPage />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Auth />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/testHome" element={<TestHome />} />
                <Route path="/testAuth" element={<TestAuth />} />
                <Route path="/testProfile" element={<ProfileMain />} />
              </>
            )}
          </Routes>
          <WidgetBar />
        </RootWrapper>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
