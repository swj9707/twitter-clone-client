import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import { Auth, EditProfile, FollowerPage, Home, Profile } from "../Pages";
import Navigation from "./Navigation";

interface props {
  isLoggedIn: boolean;
}

const AppRouter = ({ isLoggedIn }: props) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editProfile" element={<EditProfile />} />
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
