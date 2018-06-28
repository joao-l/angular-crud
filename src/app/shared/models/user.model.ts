export class User {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  userPicture?: string;
  activationCode?: string;
  failAccess?: number;
  isPasswordExpired?: boolean;
  signupDate?: string;
  takeoutDate?: string;
  activationDate?: string;
  last_login_at?: string;
  current_login_at?: string;
  last_login_ip?: string;
  current_login_ip?: string;
  login_count?: number;
  termsUseAgreeDate?: string;
  termsUseVersion?: string;
  privacyPolicyAgreeDate?: string;
  privacyPolicyVersion?: string;
  locale?: string;
  createdDate?: string;
  pushNotification?: boolean;
  birthdate?: string;
  bio?: string;
  genre?: string;
  countryId?: string;
  countryName?: string;
  active?: boolean;
  roles: string[];
  servicesProfile?: UserServicesProfile[];
}

export class UserServicesProfile {
  name: string;
  accessId: string;
  token: string;
  username: string;
  password: string;
  createdDate: string;
  userPicture: string;
}
