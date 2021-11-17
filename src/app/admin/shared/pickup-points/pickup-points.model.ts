import { FormGroup } from '@angular/forms';
import { Guid } from "guid-typescript";

//модель собственника ПС для таблицы
export class PickupPointOwnerBriefModel {
  public id: string;
  public archiveDate: string;
  public createDate: string;
  public name: string;
  public pickupPointsCount: number;
}

//модель карточки собственника ПС
export class PickupPointOwnerModel {
  public id: string;
  public isActive: boolean = true;
  public archiveDate: string;
  public createDate: string;
  public name: string;

  public mapIconInactive: string;
  public mapIconActive: string;
  public contactFirstName: string;
  public contactLastName: string;
  public contactPost: string;
  public contactEmail: string;
  public contactPhone: string;
}

//модель ПС для таблицы
export class PickupPointBriefModel {
  public id: string;
  public name: string;
  public address: string;
  public isAvailable: boolean;
  public isOffice: boolean;
  public isActive: boolean;
}

//вью модель ПС для таблицы
export class PickupPointVM extends PickupPointBriefModel {
  public isExpanded: boolean;
  public form: FormGroup;
  public mapElementId: string;

  constructor(src: PickupPointBriefModel = null) {
    super();
    this.mapElementId = `map${Guid.create()}`;
    if (src) {
      this.id = src.id;
      this.name = src.name;
      this.address = src.address;
      this.isAvailable = src.isAvailable;
      this.isOffice = src.isOffice;
      this.isActive = src.isActive;
    }
  }
}

//модель карточки ПС
export class PickupPointModel {
  public id: string;
  public isActive: boolean;
  public name: string;
  public address: string;
  public latitude?: number;
  public longitude?: number;
  public manualCoordinates: boolean;
  public phones: string;
  public schedule: string;
  public comment: string;
  public isAvailable: boolean;
  public isOffice: boolean;

  public employeeEmail: string;
  public employeePassword: string;
}

export class PickupPointEditModel extends PickupPointModel {
}