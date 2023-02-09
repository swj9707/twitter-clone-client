import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userState, TwitterUserAuthInfo } from "../../Type/Auth/Auth";
import { LoginResponse } from "../../Type/Auth/AuthRes";
import { EditProfileRes } from "../../Type/User/UserRes";

const userInitState: TwitterUserAuthInfo = {
  userId: "",
  provider: "",
};
const initialState: userState = {
  isLoggedIn: false,
  user: userInitState,
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
      state.user = userInitState;
    },
    logout: (state: userState) => {
      state.isLoggedIn = false;
      state.user = userInitState;
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
