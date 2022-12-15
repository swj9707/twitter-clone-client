import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Auth, EditProfile, FollowerPage, Home, Profile } from "./views/Pages";
import Navigation from "./Navigation";
import { RootStore } from "../Store/Data/Store";

interface props {
  isLoggedIn: boolean;
}

const AppRouter = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  console.log(user);
  return (
    <Router>
      {user.isLoggedIn && <Navigation />}
      <Routes>
        {user.isLoggedIn ? (
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
