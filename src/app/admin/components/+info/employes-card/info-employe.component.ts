import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel, RegisterEmployeeModel, EmployeeEditModel, RoleMatrixRow, AccessRoleRow } from '../../../shared/employee/employee.model';
import { EmployeeService } from '../../../shared/employee/employee.service';
import { MessageService, ConfirmationService } from "primeng/api";
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { PhoneNumberRegex } from 'src/app/shared/validation';
import { FormService } from '../../../shared/form/form-service';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';

@Component({
  selector: 'app-info-employe',
  templateUrl: './info-employe.component.html',
  styleUrls: ['../../../shared-admin.scss', './info-employe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoEmployeComponent implements OnInit {
  public employeeForm: FormGroup;
  public isEdit: boolean;
  public isArchived: boolean = false;
  public _idEmployee: string;
  public employee: EmployeeModel;
  public roleMatrix: RoleMatrixRow[];

  private hasSaveAttempt: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private confirmService: ConfirmationService,
    private textService: EditTextService,
    private msg: MessageService,
    private employeeService: EmployeeService,
    private formService: FormService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.Employees);
    this._buildForm({
      archiveDate: '',
      createDate: '',
      email: '',
      firstName: '',
      lastName: '',
      id: '',
      password: '',
      phoneNumber: '',
      position: '',
      isActive: true,
      roles: []
    });

    if (this.activatedRoute.snapshot.params['id']) {
      this._idEmployee = this.activatedRoute.snapshot.params['id'];
      this.isEdit = true;
      this._getEmployee();
    }
  }

  ngOnInit() {
  }

  private _buildForm(employee: EmployeeModel) {
    this.employeeForm = this.formBuilder.group({
      firstName: [employee.firstName, Validators.required],
      lastName: [employee.lastName, Validators.required],
      email: [employee.email, Validators.compose([Validators.required, Validators.email])],
      password: [employee.password, Validators.required],
      position: [employee.position],
      phoneNumber: [employee.phoneNumber, Validators.pattern(PhoneNumberRegex)]
    });

    this.isArchived = !employee.isActive;

    this.roleMatrix = [
      new RoleMatrixRow('CardsCatalog', [
        new AccessRoleRow('View'),
        new AccessRoleRow('Designer'),
        new AccessRoleRow('DesignAdministrator'),
        new AccessRoleRow('Owner'),
      ])
    ];
    this.roleMatrix.forEach(row => row.roles.forEach(role =>
      role.isChecked = employee.roles.find(t =>
        row.target == t.target && role.accessRole == t.access) != undefined
    ));
  }

  getFormData() {
    let employee: RegisterEmployeeModel = this.employeeForm.value;
    employee.roles = [];
    this.roleMatrix.forEach(row => row.roles.forEach(role => {
      if (role.isChecked) {
        employee.roles.push({ target: row.target, access: role.accessRole });
      }
    }));
    return employee;
  }

  rolesInvalid() {
    var isRoleMatrixEmpty = this.roleMatrix.some(row => row.roles.every(role => !role.isChecked));
    return isRoleMatrixEmpty;
  }

  public registerEmployee() {
    this.hasSaveAttempt = true;

    if (this.employeeForm.invalid) {
      this.formService.showFormErrors(this.msg);
    } else if (this.rolesInvalid()) {
      this.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Матрица ролей не заполнена' });
    } else {
      var employee = this.getFormData();
      this.employeeService.registerEmployee(employee).subscribe(
        (response) => {
          console.log(response, 'in');
          this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Сотрудник зарегистрирован' });
          this.router.navigate([`/admin/main/employees/${response}`]);
        },
        (error) => {
          this.formService.showServerErrors(this.msg, error);
        }
      );
    }
  }

  public saveEmployee() {
    this.hasSaveAttempt = true;

    if (this.employeeForm.invalid) {
      this.formService.showFormErrors(this.msg);
    } else if (this.rolesInvalid()) {
      this.msg.add({ severity: 'error', summary: 'Ошибка', detail: 'Матрица ролей не заполнена' });
    } else {
      var employee = this.getFormData();
      this.employeeService.updateInfoEmployee(this._idEmployee, {
        ...employee
      })
        .subscribe(response => {
          this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
          this._getEmployee();
        },
          (error) => {
            this.formService.showServerErrors(this.msg, error);
          })
    }
  }

  public _getEmployee() {
    this.employeeService.getEmployee(this._idEmployee).subscribe((data: EmployeeModel) => {
      this.employee = data;
      this._buildForm(this.employee);
    });
  }

  public restoreEmployee() {
    var msg = this.textService.getText(MessageGroupEnum.Employees, 'EmployeeRestoring');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.employeeService.restoreEmployee(this._idEmployee).subscribe(
          data => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Сотрудник восстановлен' });
            this.router.navigate(['/admin/main/employees/']);
          }
        )
      }
    });
  }

  public sendRegData() {
    var msg = this.textService.getText(MessageGroupEnum.Employees, 'EmployeeSendingRegData');
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.employeeService.sendEmployeeRegData(this._idEmployee).subscribe(
          data => {
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Регистрационные данные отправлены' });
          }
        )
      }
    });
  }

  get f() { return this.employeeForm.controls; }

  public hasError(control: any) {
    if (this.isArchived)
      return false;
    else
      return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }

  public hasRolesError() {
    if (this.isArchived)
      return false;
    else
      return this.rolesInvalid() && this.hasSaveAttempt;
  }
}
