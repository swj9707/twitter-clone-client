export default interface loginForm {
  userEmail: string;
  password: string;
}

export interface signupForm {
  userEmail: string;
  userName: string;
  password: string;
}

export interface userState {
  isLoggedIn: boolean;
  user: TwitterUserAuthInfo;
}

export interface TwitterUserAuthInfo {
  userId: string;
  provider: string;
}
