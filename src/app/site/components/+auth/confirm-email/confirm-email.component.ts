import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { CustomerService } from 'src/app/admin/shared/customer/customer.service';

@Component({
  selector: 'confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private customerService: CustomerService,
    private msg: MessageService,
    private router: Router,
    private formService: FormService,
  ) {
    this.activateRoute.queryParams.subscribe(params => {
      let userId = params.userId;
      let code = params.code;

      customerService.confirmEmail(userId, code).subscribe(
        (response: any) => {
          this.msg.add({ severity: 'Success', summary: 'Успех', detail: 'Email подтвержден' });
          this.router.navigate(['/']);
        },
        error => {
          this.formService.showServerErrors(this.msg, error);
          this.router.navigate(['/']);
        }
      );
    });
  }

  ngOnInit() {
  }
}
