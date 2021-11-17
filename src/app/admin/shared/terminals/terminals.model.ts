class BaseTerminal {
  public id: string;
  public createDate: string;
  public archiveDate: string;
  public inventoryNumber: string;
  public connectId: string;
  public terminalOwner: string;
  public isOnline: boolean;
  public readyStatusString: string;
}

export class TerminalBrief extends BaseTerminal {
}

export class TerminalModel extends BaseTerminal {
  public isActive: boolean = true;
  public terminalOwnerId: string;
  public location: string;
  public cartCleanupWarningDelay: number;
  public cartCleanupCountdown: number;
  public publishCatalogLevels: string[];
  public customCatalogLevelImages: CustomCatalogLevelImage[];
  public promoVideo: string;
  public canPayBankCard: boolean;
}

export class CustomCatalogLevelImage {
  public catalogLevelId: string;
  public backgroundImage: string;
}

export class TerminalEditModel {
}

export class GetTerminalsForAttachRow {
  public id: string;
  public connectId: string;
  public terminalOwner: string;
  public terminalOwnerId: string;
}