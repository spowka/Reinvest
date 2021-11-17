import { formatDate } from '@angular/common';

export class EmployeeModel {
  public id: string;
  public createDate: string;
  public archiveDate: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public position: string;
  public password: string;
  public isActive?: boolean;
  public roles: EmployeeRoleModel[];
}
export interface EmployeeRoleModel {
  target: RoleTargetType;
  access: RoleAccessType;
}
export interface RegisterEmployeeModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  position: string;
  roles: EmployeeRoleModel[];
}
export interface EmployeeEditModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  position: string;
  roles: EmployeeRoleModel[];
}

export type RoleTargetType = 'CardsCatalog';
export type RoleAccessType = 'View' | 'Designer' | 'DesignAdministrator' | 'Owner';

export class AccessRoleRow {
  public accessRole: RoleAccessType;
  public isChecked: boolean;

  public get accessRoleName() {
    switch (this.accessRole) {
      case 'View': return 'Просмотр';
      case 'Designer': return 'Дизайнер';
      case 'DesignAdministrator': return 'Дизайн-администратор';
      case 'Owner': return 'Owner';
    }
  }
  public get accessRoleDescription() {
    switch (this.accessRole) {
      case 'View': return '';
      case 'Designer': return 'Создает и редактирует карточки, а также отправляет их на проверку.';
      case 'DesignAdministrator': return 'Выпускает карточки в публикацию или отправляет дизайнеру на доработку';
      case 'Owner': return 'Уполномочен убирать карточки из публикации';
    }
  }

  constructor(accessRole: RoleAccessType) {
    this.accessRole = accessRole;
  }
}

export class RoleMatrixRow {
  public target: RoleTargetType;
  public roles: AccessRoleRow[];

  public get targetName() {
    switch (this.target) {
      case 'CardsCatalog': return 'Каталог карточек';
    }
  }

  constructor(target: RoleTargetType, roles: AccessRoleRow[]) {
    this.target = target;
    this.roles = roles;
  }
}