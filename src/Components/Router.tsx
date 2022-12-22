import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Auth, EditProfile, FollowerPage, Home, Profile } from "./views/Pages";
import Navigation from "./views/Component/Navigation";
import { RootStore } from "../Store/Data/Store";
import EditPassword from "./views/Pages/EditPassword/EditPassword";

const AppRouter = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  return (
    <Router>
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
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
