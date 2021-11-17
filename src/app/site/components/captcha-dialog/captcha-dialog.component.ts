// Angular
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from 'src/app/admin/shared/settings/settings.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { RecaptchaComponent } from 'ng-recaptcha';

@Component({
	selector: 'app-captcha-dialog',
	templateUrl: './captcha-dialog.component.html',
	styleUrls: ['./captcha-dialog.component.scss'],
})
export class CaptchaDialogComponent implements OnInit {
	siteKey: string;

	@ViewChild('captchaRef') captchaRef: RecaptchaComponent;

	constructor(
		private dialogRef: DynamicDialogRef,
		private settingsService: SettingsService,
	) {
		settingsService.getParam('ReCaptchaSiteKey').subscribe(
			response => { this.siteKey = response.value; },
			error => { this.dialogRef.close(null); }
		);
	}

	ngOnInit() {
	}

	execute() {
		this.captchaRef.execute();
	}

	resolved(event: string) {
		this.dialogRef.close(event);
	}
}
