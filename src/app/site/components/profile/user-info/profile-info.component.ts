import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { PhoneNumberRegex } from 'src/app/shared/validation';
import { ProfileService } from '../../../shared/profile/profile.service';
import { ProfileDataResponse } from '../../../shared/profile/profile.model';
import { SiteAuthService } from '../../../shared/auth-service/auth.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
  host: { class: 'column' },
  encapsulation: ViewEncapsulation.None
})
export class ProfileInfoComponent implements OnInit {
  form: FormGroup;
  hasSaveAttempt: boolean;
  loading: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public msg: MessageService,
    private formService: FormService,
    private auth: SiteAuthService,
    private profileService: ProfileService,
  ) {
    this.buildForm(new ProfileDataResponse());
    this.reload();
  }

  reload() {
    this.loading = true;
    this.profileService.getProfile().subscribe(data => {
      this.buildForm(data);
      this.loading = false;
    });
  }

  buildForm(src: ProfileDataResponse) {
    this.form = this.formBuilder.group({
      firstName: [src.firstName, Validators.required],
      lastName: [src.lastName, Validators.required],
      email: [src.email, Validators.compose([Validators.required, Validators.email])],
      phoneNumber: [src.phoneNumber, Validators.pattern(PhoneNumberRegex)],
      deliveryRegion: [src.deliveryRegion],
      deliveryCity: [src.deliveryCity],
      deliveryPostIndex: [src.deliveryPostIndex],
      deliveryStreet: [src.deliveryStreet],
      deliveryHouse: [src.deliveryHouse],
      deliveryBuilding: [src.deliveryBuilding],
      deliveryApartment: [src.deliveryApartment]
    });
    this.hasSaveAttempt = false;
  }

  save() {
    this.hasSaveAttempt = true;
    this.loading = true;

    var formData = FormService.getFormData(this.form);
    this.profileService.updateProfile(formData).subscribe(
      (response) => {
        this.msg.add({ severity: 'success', summary: 'Данные сохранены' });
        this.auth.reloadUser();
        this.reload();
      },
      (error) => {
        this.formService.showServerErrors(this.msg, error);
        this.loading = false;
      });
  }

  ngOnInit() {
  }

  get f() { return this.form.controls; }

  public hasError(control: any) {
    return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }
}
