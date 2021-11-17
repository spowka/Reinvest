import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, NgFormSelectorWarning } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from "primeng/api";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { FormService } from '../../../shared/form/form-service';
import { BlogPostsService } from '../../../shared/blog-posts/blog-posts.service';
import { BlogPostModel } from '../../../shared/blog-posts/blog-posts.model';
import { CurrentCalendarLocale, CalendarLocale } from 'src/app/shared/calendar-locale';
import { ImageEditModel } from '../../../shared/image/image-edit-model';
import { DomSanitizer } from '@angular/platform-browser';
import { AddFileToForm } from '../../../shared/file/add-file-to-form';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['../../../shared-admin.scss', './blog-post-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostCardComponent implements OnInit {
  calendarLocale: CalendarLocale;

  form: FormGroup;
  isBusy: boolean;
  isArchived: boolean = false;
  blogPostId: string;
  logicalName: string;
  postImage: ImageEditModel;

  ckeditor = ClassicEditor;

  private hasSaveAttempt: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private textService: EditTextService,
    private msg: MessageService,
    private formService: FormService,
    private blogPostsService: BlogPostsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    sanitizer: DomSanitizer,
  ) {
    // this.textService.loadTextsGroup(MessageGroupEnum.PickupPoints);
    this.calendarLocale = CurrentCalendarLocale;
    this.postImage = new ImageEditModel(sanitizer, '850х340');

    this._buildForm(new BlogPostModel());

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
    this.blogPostsService.get(id).subscribe(
      response => {
        this._buildForm(response);
      },
      error => {
        this.formService.showServerErrors(this.msg, error);
      });
  }

  private _buildForm(model: BlogPostModel) {
    this.form = this.formBuilder.group({
      title: [model.title, Validators.required],
      logicalName: [model.logicalName, Validators.compose(
        [Validators.required, FormService.customValidator(this, this.logicalNameValidator)])],
      titleTag: [model.titleTag],
      descriptionTag: [model.descriptionTag],
      keywordsTag: [model.keywordsTag],
      shortContent: [model.shortContent],
      content: [model.content],
      tags: [model.tags],
      createDate: [new Date(model.createDate)],
      isPublished: [model.isPublished],
    });
    this.postImage.set(model.postImage);
    this.blogPostId = model.id;
    this.logicalName = model.logicalName;
    this.hasSaveAttempt = false;
  }

  private logicalNameValidator(sender: BlogPostCardComponent, control: AbstractControl): ValidationErrors | null {
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

      AddFileToForm(formData, 'postImage', this.postImage.file);

      this.blogPostsService.saveBlogPost(this.blogPostId, formData).subscribe(
        response => {
          this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
          if (this.blogPostId) {
            this.getPage(this.blogPostId);
          } else if (response.id) {
            this.router.navigate([`/admin/main/blog-posts/${response.id}`]);
          }
        },
        (error) => {
          this.formService.showServerErrors(this.msg, error);
        });
    }
  }

  goBack() {
    this.router.navigate([`/admin/main/blog-posts`]);
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
    return this.logicalName && `/blog/${this.logicalName}` || null;
  }
}
