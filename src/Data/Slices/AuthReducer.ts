import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userState, TwitterUserDTO } from "../Type/Auth/Auth";
import { LoginResponse } from "../Type/Auth/AuthRes";
import { EditProfileRes } from "../Type/User/UserRes";

const userData = localStorage.getItem("USER_INFO");
const user: TwitterUserDTO | null = userData ? JSON.parse(userData) : null;
const initialState: userState = user
  ? {
      isLoggedIn: true,
      user: user,
    }
  : {
      isLoggedIn: false,
      user: null,
    };

const authReducer = createSlice({
  name: "authReducer",
  initialState: initialState,
  reducers: {
    login_success: (state: userState, action: PayloadAction<LoginResponse>) => {
      state.isLoggedIn = true;
      state.user = action.payload.data.userInfo;
      localStorage.setItem(
        "ACCESS_TOKEN",
        action.payload.data.tokenInfo.accessToken
      );
    },
    login_fail: (state: userState) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    logout: (state: userState) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    change_username: (
      state: userState,
      action: PayloadAction<EditProfileRes>
    ) => {
      state.user = action.payload.data.userInfo;
    },
  },
});

export const { login_success, login_fail, logout, change_username } =
  authReducer.actions;
export default authReducer.reducer;
