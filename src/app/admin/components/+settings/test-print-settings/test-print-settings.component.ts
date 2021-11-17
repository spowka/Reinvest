import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormService } from '../../../shared/form/form-service';
import { TestPrintSettingsResponse } from '../../../shared/settings/settings.model';
import { SettingsService } from '../../../shared/settings/settings.service';
import { PrintFilesMode } from '../../../shared/cards/card.model';
import { ImageEditModel } from '../../../shared/image/image-edit-model';
import { DomSanitizer } from '@angular/platform-browser';
import { AddFileToForm } from '../../../shared/file/add-file-to-form';

@Component({
  selector: 'app-test-print-settings',
  templateUrl: './test-print-settings.component.html',
  styleUrls: ['../../../shared-admin.scss', './test-print-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TestPrintSettingsComponent implements OnInit {
  isLoading = true;

  hasSaveAttempt: boolean;

  printFilesMode: PrintFilesMode;
  printFrontImage: ImageEditModel;
  printFrontHolo: ImageEditModel;
  printFrontLamination: ImageEditModel;
  printBackImage: ImageEditModel;
  printBackHolo: ImageEditModel;
  printBackLamination: ImageEditModel;

  constructor(
    private settingsService: SettingsService,
    private msg: MessageService,
    private formService: FormService,
    private sanitizer: DomSanitizer,
  ) {
    this.printFrontImage = new ImageEditModel(sanitizer, '720х1028');
    this.printFrontHolo = new ImageEditModel(sanitizer, '720х1028');
    this.printFrontLamination = new ImageEditModel(sanitizer, '720х1028');
    this.printBackImage = new ImageEditModel(sanitizer, '720х1028');
    this.printBackHolo = new ImageEditModel(sanitizer, '720х1028');
    this.printBackLamination = new ImageEditModel(sanitizer, '720х1028');

    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    this.settingsService.getTestPrintSettings().subscribe(
      response => {
        this.isLoading = false;
        this.hasSaveAttempt = false;

        this.printFilesMode = response.printFilesMode;
        this.printFrontImage.set(response.printFrontImage);
        this.printFrontHolo.set(response.printFrontHolo);
        this.printFrontLamination.set(response.printFrontLamination);
        this.printBackImage.set(response.printBackImage);
        this.printBackHolo.set(response.printBackHolo);
        this.printBackLamination.set(response.printBackLamination);
      },
      error => {
        console.log(error);
      }
    );
  }

  public get isValid(): boolean {
    if (this.printFilesMode == 'None')
      return false;
    if (this.printFilesMode == 'ImageLamination' || this.printFilesMode == 'ImageHoloLamination') {
      if (!this.printFrontImage.imageSrc || !this.printFrontLamination.imageSrc ||
        !this.printBackImage.imageSrc || !this.printBackLamination.imageSrc)
        return false;
    }
    if (this.printFilesMode == 'ImageHoloLamination') {
      if (!this.printFrontHolo.imageSrc || !this.printBackHolo.imageSrc)
        return false;
    }

    return true;
  }

  public save() {
    this.hasSaveAttempt = true;

    if (!this.isValid) {
      this.formService.showFormErrors(this.msg);
    } else {
      const formData = new FormData();
      formData.append('printFilesMode', this.printFilesMode);
      AddFileToForm(formData, 'printFrontImage', this.printFrontImage.file);
      AddFileToForm(formData, 'printFrontHolo', this.printFrontHolo.file);
      AddFileToForm(formData, 'printFrontLamination', this.printFrontLamination.file);
      AddFileToForm(formData, 'printBackImage', this.printBackImage.file);
      AddFileToForm(formData, 'printBackHolo', this.printBackHolo.file);
      AddFileToForm(formData, 'printBackLamination', this.printBackLamination.file);

      this.isLoading = true;
      this.settingsService.setTestPrintSettings(formData).subscribe(
        data => {
          this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
          this.loadData();
        },
        error => {
          this.isLoading = false;
          this.formService.showServerErrors(this.msg, error);
        }
      );
    }
  }

  ngOnInit() {
  }
}