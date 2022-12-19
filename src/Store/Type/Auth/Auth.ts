export interface loginForm {
  userEmail: string;
  password: string;
}

export interface userState {
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
