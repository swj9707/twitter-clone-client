export interface loginForm {
  userEmail: String;
  password: String;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: TwitterUserDTO | null;
}

export interface TwitterUserDTO {
  userId: string;
  email: string;
  userName: string;
  userRole: string;
  provider: string;
  userStatus: string;
  lastLogin?: Date;
}
