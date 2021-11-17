class BaseTerminalOwner {
  public id: string;
  public createDate: string;
  public archiveDate: string;
  public name: string;
  public contactPersonName: string;
  public contactPhone: string;
  public contactEmail: string;
}

export class TerminalOwnerBrief extends BaseTerminalOwner {
  public terminalsCount: number;
}

export class TerminalOwnerModel extends BaseTerminalOwner {
  public isActive: boolean = true;
  public email: string;
  public password: string;
  public officeAddress: string;
  public terminals: Terminal[] = [];
}

export class Terminal {
  public id: string;
  public connectId: string;
}

export class TerminalOwnerEditModel {
  public email: string;
  public password: string;
  public name: string;
  public officeAddress: string;
  public contactPersonName: string;
  public contactPhone: string;
  public contactEmail: string;
  public terminals: string[];
}