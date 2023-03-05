import { TwitterUserInfo } from "@/Data/Type/User/User";
import { UserInfoRes } from "@/Data/Type/User/UserRes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialUserInfo: TwitterUserInfo = {
  email: "",
  userName: "",
  userNickname: "",
  userRole: "",
  profileImage: undefined,
  backgroundImage: undefined,
  provider: "",
  lastLogin: "",
};

const userInfoReducer = createSlice({
  name: "userInfoReducer",
  initialState: initialUserInfo,
  reducers: {
    setUserInfo: (
      state: TwitterUserInfo,
      action: PayloadAction<UserInfoRes>
    ) => {
      const userInfo = action.payload.data.userInfo;
      return {
        ...state,
        email: userInfo.email,
        userName: userInfo.userName,
        userNickname: userInfo.userNickname,
        userRole: userInfo.userRole,
        profileImage: userInfo.profileImage,
        backgroundImage: userInfo.backgroundImage,
        provider: userInfo.provider,
        lastLogin: userInfo.lastLogin,
      };
    },
    setUserInfoInitState: (state: TwitterUserInfo) => {
      return initialUserInfo;
    },
  },
});

export const { setUserInfo, setUserInfoInitState } = userInfoReducer.actions;
export default userInfoReducer.reducer;
