import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogService, ConfirmationService, MessageService } from 'primeng/api';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { DefaultConfirmationTitle, DefaultConfirmationText, Consts } from 'src/app/consts';
import { PromoBannersService } from '../../../shared/promo-banners/promo-banners.service';
import { PromoBannerModel } from '../../../shared/promo-banners/promo-banners.model';
import { PromoBannerModelVM } from './PromoBannerModelVM';
import { ImageEditModel } from '../../../shared/image/image-edit-model';
import { DomSanitizer } from '@angular/platform-browser';
import { CurrentCalendarLocale, CalendarLocale } from 'src/app/shared/calendar-locale';
import { InsertEmptyNode } from '../../../shared/helpers/array-helpers';
import { FormService } from '../../../shared/form/form-service';
import { AddFileToForm } from '../../../shared/file/add-file-to-form';

@Component({
  selector: 'app-promo-banners',
  templateUrl: './promo-banners.component.html',
  styleUrls: ['../../../shared-admin.scss', './promo-banners.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromoBannersComponent implements OnInit, OnDestroy {
  public banners: PromoBannerModelVM[] = [];
  public calendarLocale: CalendarLocale;

  public get newFile(): File { return undefined; }
  public set newFile(value: File) {
    if (value) {
      this.add(value);
    }
  }

  constructor(
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private promoBannersService: PromoBannersService,
    private textService: EditTextService,
    private msg: MessageService,
    private sanitizer: DomSanitizer,
    private formService: FormService,
    private confirmService: ConfirmationService,
  ) {
    this.calendarLocale = CurrentCalendarLocale;
    //this.textService.loadTextsGroup(MessageGroupEnum.CatalogStructure);
    this.reload();
  }

  public reload() {
    this.promoBannersService.getAll().subscribe((response: PromoBannerModel[]) => {
      var banners = response.map(t => (new PromoBannerModelVM().fill(t, this.sanitizer))) || [];
      this.banners = InsertEmptyNode(banners, new PromoBannerModelVM().setFirstRow());
    });
  }

  public add(file: File) {
    if (this.banners.length <= 0) {
      this.banners.push(new PromoBannerModelVM().setFirstRow());
    }

    var vm = new PromoBannerModelVM().fill(null, this.sanitizer);
    vm.imageFile.file = file;
    this.banners.push(vm);
  }

  public delete(row: PromoBannerModelVM) {
    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: DefaultConfirmationTitle,
      message: 'Удалить баннер?',
      accept: () => {
        this.banners = this.banners.filter(t => t != row);
      }
    });
  }

  public save() {
    const formData = new FormData();
    let formIndex = 0;
    this.banners.forEach((item, index) => {
      if (item.isFirstRow)
        return;

      Object.keys(item).forEach(attr => {
        var value = item[attr];
        if (value instanceof ImageEditModel) {
          return;
        }
        if (value != null) {
          formData.append(`items[${formIndex}].${attr}`, value);
        }
      });

      item.showFrom && formData.set(`items[${formIndex}].showFrom`, item.showFrom.toISOString());
      item.showTo && formData.set(`items[${formIndex}].showTo`, item.showTo.toISOString());

      AddFileToForm(formData, `items[${formIndex}].image`, item.imageFile.file);

      formIndex++;
    });

    this.promoBannersService.save(formData).subscribe(
      response => {
        this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Изменения сохранены' });
        this.reload();
      },
      error => {
        this.formService.showServerErrors(this.msg, error);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public clearFileInput() {
    FormService.clearInput('newFileButton');
  }
}