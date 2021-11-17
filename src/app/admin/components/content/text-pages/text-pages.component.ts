import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogService, MessageService, ConfirmationService } from 'primeng/api';
import { InsertEmptyNode } from '../../../shared/helpers/array-helpers';
import { TextPageModelVM } from './TextPageModelVM';
import { TextPagesService } from '../../../shared/text-pages/text-pages.service';
import { Router } from '@angular/router';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { FormService } from 'src/app/admin/shared/form/form-service';

@Component({
  selector: 'app-text-pages',
  templateUrl: './text-pages.component.html',
  styleUrls: ['../../../shared-admin.scss', './text-pages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextPagesComponent implements OnInit, OnDestroy {
  isLoading = false;
  pages: TextPageModelVM[] = [];

  constructor(
    public dialogService: DialogService,
    private textPagesService: TextPagesService,
    private msg: MessageService,
    private router: Router,
    private confirmService: ConfirmationService,
    private formService: FormService,
  ) {
    this.reload();
  }

  public reload() {
    this.textPagesService.getAll().subscribe(response => {
      var pages = response.map(t => (new TextPageModelVM().fill(t))) || [];
      this.pages = InsertEmptyNode(pages, new TextPageModelVM().setFirstRow());
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  isPublishedChange(row: TextPageModelVM) {
    this.isLoading = true;
    this.textPagesService.updateIsPublished(row.id, row.isPublished).subscribe(
      () => {
        this.isLoading = false;
        this.msg.add({ severity: 'success', summary: 'Статус публикации изменен' });
      }, () => {
        this.msg.add({ severity: 'error', summary: 'Ошибка изменения статуса публикации' });
        this.reload();
      }
    );
  }

  reorder() {
    let ids = this.pages.map(t => t.id);
    this.textPagesService.updateOrder(ids).subscribe(
      () => {
        this.isLoading = false;
        this.msg.add({ severity: 'success', summary: 'Порядок вывода изменен' });
      }, () => {
        this.msg.add({ severity: 'error', summary: 'Ошибка изменения порядка вывода' });
        this.reload();
      }
    );
  }

  edit(row) {
    this.router.navigate([`/admin/main/text-pages/${row.id}`]);
  }

  delete(row) {
    let msg = {
      title: 'Удалить страницу?',
      text: 'Восстановление будет невозможно',
    };

    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.textPagesService.delete(row.id).subscribe(
          (response: any) => {
            this.reload();
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Страница удалена' });
          },
          error => {
            this.formService.showServerErrors(this.msg, error);
          });
      }
    });
  }
}