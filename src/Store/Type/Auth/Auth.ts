export const LOGIN_USER = "LOGIN_USER";

export interface loginForm {
  userEmail: String;
  password: String;
}

export interface UserInterface {
  userUid: string;
  userEmail: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: UserInterface | null;
}
