export interface CurrentUserSiteResponse {
  id: string;
  fullName: string;
  userType: UserType;
}

export interface UserLoginSiteResponse extends CurrentUserSiteResponse {
  token: string;
}

type UserType = 'Employee' | 'Customer' | 'PrintAgent' | 'PickPointManager' | 'Guest';