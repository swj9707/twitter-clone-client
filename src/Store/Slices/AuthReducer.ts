import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, TwitterUserDTO } from "../Type/Auth/Auth";
import { LoginResponse, LogoutResponse } from "../Type/Auth/AuthRes";
import { FailureResponse } from "../Type/BaseResponse";

const userData = localStorage.getItem("USER_INFO");
const user: TwitterUserDTO | null = userData ? JSON.parse(userData) : null;
const initialState: AuthState = user
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
    login_success: (state: AuthState, action: PayloadAction<LoginResponse>) => {
      state.isLoggedIn = true;
      state.user = action.payload.data.userInfo;
    },
    login_fail: (state: AuthState, action: PayloadAction<FailureResponse>) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    logout: (state: AuthState, action: PayloadAction<LogoutResponse>) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login_success, login_fail, logout } = authReducer.actions;
export default authReducer.reducer;
