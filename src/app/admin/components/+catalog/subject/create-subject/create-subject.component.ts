import { Component, OnInit } from '@angular/core';
import { MessageService, DynamicDialogRef, DynamicDialogConfig, SelectItem } from "primeng/api";
import { CatalogService } from 'src/app/admin/shared/catalog/catalog.service';
import { catchError } from 'rxjs/internal/operators/catchError';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { ImageEditModel } from 'src/app/admin/shared/image/image-edit-model';
import { DomSanitizer } from '@angular/platform-browser';
import { AddFileToForm } from 'src/app/admin/shared/file/add-file-to-form';
import { Utils } from '../../../../../shared/Utils';

@Component({
  selector: 'create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['../../../../shared-admin.scss', './create-subject.component.scss']
})

export class CreateSubjectComponent implements OnInit {

  public isPending = false;
  subjectForm = {
    name: '',
    shortDescription: '',
    extendedDescription: '',
    image: File
  };
  parentId: string;
  id: string;
  isValid = true;
  parentTheme: any;
  childrenTheme: SelectItem[];

  image: ImageEditModel;
  terminalThemeListImage: ImageEditModel;
  terminalSeriesListImage: ImageEditModel;
  terminalBackgroundImage: ImageEditModel;
  terminalCollectionsListImage: ImageEditModel;
  terminalCardsListImage: ImageEditModel;

  constructor(
    private catalogService: CatalogService,
    private msg: MessageService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private formService: FormService,
    private sanitizer: DomSanitizer,
  ) {
    this.image = new ImageEditModel(sanitizer, config.data.imageSize);
    this.terminalThemeListImage = this._createImageEditModel(config.data.terminalThemeListImageSize);
    this.terminalSeriesListImage = this._createImageEditModel(config.data.terminalSeriesListImageSize);
    this.terminalBackgroundImage = this._createImageEditModel(config.data.terminalBackgroundSize);
    this.terminalCollectionsListImage = this._createImageEditModel(config.data.terminalCollectionsListImageSize);
    this.terminalCardsListImage = this._createImageEditModel(config.data.terminalCardsListImageSize);

    if (config.data && config.data.id) {
      this.id = config.data.id;
      catalogService.get(this.id).subscribe((result: any) => {
        this.subjectForm.name = result.name;
        this.subjectForm.shortDescription = result.shortDescription;
        this.subjectForm.extendedDescription = result.extendedDescription;

        this._setImageUrl(this.image, result.image);
        this._setImageUrl(this.terminalThemeListImage, result.terminalThemeListImage);
        this._setImageUrl(this.terminalSeriesListImage, result.terminalSeriesListImage);
        this._setImageUrl(this.terminalBackgroundImage, result.terminalBackgroundImage);
        this._setImageUrl(this.terminalCollectionsListImage, result.terminalCollectionsListImage);
        this._setImageUrl(this.terminalCardsListImage, result.terminalCardsListImage);

        if (result.parent) {
          if (result.parent.parent) {
            this.parentId = result.parent.id;
            this.parentTheme = result.parent.parent;
            this.childrenTheme = result.parent.parent.children.map(c => ({ label: c.name, value: c.id }));
          } else {
            this.parentId = result.parent.id;
            this.parentTheme = result.parent;
          }
        }
      });
    }
    if (config.data && config.data.parentTheme) {
      this.parentTheme = config.data.parentTheme;
      if (config.data.childrenTheme) {
        this.childrenTheme = config.data.childrenTheme.map(c => ({ label: c.name, value: c.id }));
      } else {
        this.parentId = config.data.parentTheme.id;
      }
    }
  }

  ngOnInit() {
  }

  public closeModal() {
    this.ref.close();
  }

  public selectedImage(value) {
    this.subjectForm.image = value;
  }

  public save() {
    this.isValid = Object.values(this.subjectForm).every((item) => !Utils.isMissing(item))
      && (!this.childrenTheme || !Utils.isMissing(this.parentId));

    if (!this.isValid) {
      this.formService.showFormErrors(this.msg);
    } else {
      const formData = FormService.getFormData(this.subjectForm);

      this.isPending = true;

      if (this.childrenTheme) {
        formData.append('parentId', this.parentId);
      } else if (this.parentTheme) {
        formData.append('parentId', this.parentTheme.id);
      }

      this._addImageEditModel(formData, 'Image', this.image);
      this._addImageEditModel(formData, 'TerminalThemeListImage', this.terminalThemeListImage);
      this._addImageEditModel(formData, 'TerminalSeriesListImage', this.terminalSeriesListImage);
      this._addImageEditModel(formData, 'TerminalBackgroundImage', this.terminalBackgroundImage);
      this._addImageEditModel(formData, 'TerminalCollectionsListImage', this.terminalCollectionsListImage);
      this._addImageEditModel(formData, 'TerminalCardsListImage', this.terminalCardsListImage);

      if (this.id) {
        this.catalogService.update(this.id, formData).subscribe(
          data => {
            this.isPending = false;
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Тематика успешно обновлена' });
            this.closeModal();
          }, error => {
            this.isPending = false;
            this.formService.showServerErrors(this.msg, error);
            return error;
          });
      } else {
        this.catalogService.add(formData).subscribe(
          data => {
            this.isPending = false;
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Тематика успешно создана' });
            this.closeModal();
          }, error => {
            this.isPending = false;
            this.formService.showServerErrors(this.msg, error);
            return error;
          });
      }
    }
  }

  private _createImageEditModel(size: string): ImageEditModel {
    return size ? new ImageEditModel(this.sanitizer, size) : null;
  }
  private _addImageEditModel(form: any, fileName: string, image: ImageEditModel) {
    if (image) {
      AddFileToForm(form, fileName, image.file);
    }
  }
  private _setImageUrl(image: ImageEditModel, url: string) {
    if (image) {
      image.url = url;
    }
  }
}