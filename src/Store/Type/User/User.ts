export interface EditUserProfile {
  userId?: string;
  newUserName: string;
}

export interface EditUserPassword {
  userId?: string;
  currentPassword: string;
  newPassword: string;
}
