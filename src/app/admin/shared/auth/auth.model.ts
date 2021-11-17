import { RoleAccessType, RoleTargetType } from '../employee/employee.model';
import { CurrentUserSiteResponse } from 'src/app/site/shared/user/user';

export interface CurrentUserResponse extends CurrentUserSiteResponse {
  access: UserAccessRow[];
}

interface UserAccessRow {
  target: RoleTargetType;
  access: RoleAccessType;
}

export interface UserLoginResponse extends CurrentUserResponse {
  token: string;
}