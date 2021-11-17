import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, NgFormSelectorWarning } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from "primeng/api";
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { FormService } from '../../../shared/form/form-service';
import { TextPagesService } from '../../../shared/text-pages/text-pages.service';
import { TextPageModel } from '../../../shared/text-pages/text-pages.model';
import { pickPointsMapMarker, officeMapMarker, faqMarkerBegin, faqMarkerDivider, faqMarkerEnd } from 'src/app/consts';

@Component({
  selector: 'app-text-page-card',
  templateUrl: './text-page-card.component.html',
  styleUrls: ['../../../shared-admin.scss', './text-page-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextPageCardComponent implements OnInit {
  pickPointsMapMarker: string = pickPointsMapMarker;
  officeMapMarker: string = officeMapMarker;
  faqMarkerBegin: string = faqMarkerBegin;
  faqMarkerDivider: string = faqMarkerDivider;
  faqMarkerEnd: string = faqMarkerEnd;

  form: FormGroup;

  isBusy: boolean;
  isArchived: boolean = false;
  isSystem: boolean;
  pageId: string;
  logicalName: string;

  private hasSaveAttempt: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private msg: MessageService,
    private formService: FormService,
    private textPagesService: TextPagesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {

    this._buildForm(new TextPageModel());

    activateRoute.params.subscribe(params => {
      if (params.id) {
        this.getPage(params.id);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  getPage(id: string) {
    this.textPagesService.get(id).subscribe(
      response => {
        this._buildForm(response);
      },
      error => {
        this.formService.showServerErrors(this.msg, error);
      });
  }

  private _buildForm(model: TextPageModel) {
    this.form = this.formBuilder.group({
      isPublished: [model.isPublished],
      logicalName: [model.logicalName, Validators.compose(
        [Validators.required, FormService.customValidator(this, this.logicalNameValidator)])],
      title: [model.title, Validators.required],
      content: [model.content],
      titleTag: [model.titleTag],
      descriptionTag: [model.descriptionTag],
      keywordsTag: [model.keywordsTag],
    });
    this.isSystem = model.isSystem;
    this.pageId = model.id;
    this.logicalName = model.logicalName;
    this.hasSaveAttempt = false;
  }

  private logicalNameValidator(sender: TextPageCardComponent, control: AbstractControl): ValidationErrors | null {
    let value: string = control.value && control.value.toString() || '';
    for (var i = 0; i < value.length; i++) {
      let c = value.charAt(i);
      let ok = (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || c == '-' || c == '_';
      if (!ok)
        return { invalidChars: true };
    }
  }

  save() {
    this.hasSaveAttempt = true;

    if (this.form.invalid) {
      this.formService.showFormErrors(this.msg);
    } else {
      const formData = FormService.getFormData(this.form);

      this.textPagesService.savePage(this.pageId, formData).subscribe(
        response => {
          this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
          if (this.pageId) {
            this.getPage(this.pageId);
          } else if (response.id) {
            this.router.navigate([`/admin/main/text-pages/${response.id}`]);
          }
        },
        (error) => {
          this.formService.showServerErrors(this.msg, error);
        });
    }
  }

  goBack() {
    this.router.navigate([`/admin/main/text-pages`]);
  }

  get f() { return this.form.controls; }

  hasError(control: any) {
    if (this.isArchived || !control)
      return false;
    else
      return control.invalid && (control.dirty || control.touched || this.hasSaveAttempt);
  }

  get header() {
    return this.f.title.value || 'Новая страница';
  }

  get pageLink() {
    return this.logicalName && `/${this.logicalName}` || null;
  }
}
