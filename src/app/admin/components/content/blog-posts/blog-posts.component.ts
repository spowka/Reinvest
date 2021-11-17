import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogService, MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { Consts, DefaultConfirmationTitle, DefaultConfirmationText } from 'src/app/consts';
import { BlogPostsService } from '../../../shared/blog-posts/blog-posts.service';
import { BlogPostModelVM } from './BlogPostModelVM';
import { CalendarLocale, CurrentCalendarLocale } from 'src/app/shared/calendar-locale';
import { FormService } from 'src/app/admin/shared/form/form-service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['../../../shared-admin.scss', './blog-posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostsComponent implements OnInit, OnDestroy {
  calendarLocale: CalendarLocale;

  isLoading = false;
  pages: BlogPostModelVM[] = [];
  filters: any = {};
  sort = { field: 'createDate', order: -1 };
  totalRecords = 0;

  constructor(
    private dialogService: DialogService,
    private blogPostsService: BlogPostsService,
    private msg: MessageService,
    private router: Router,
    private confirmService: ConfirmationService,
    private formService: FormService,
  ) {
    this.calendarLocale = CurrentCalendarLocale;
    //this.textService.loadTextsGroup(MessageGroupEnum.CatalogStructure);    
  }

  resetFilters() {
    this.filters = {
      createDateFrom: '',
      createDateTo: '',
      title: '',
    };

    this.reload();
  }

  public reload() {
    const filters =
    {
      createDate: {
        from: this.filters.createDateFrom,
        to: this.filters.createDateTo,
      },
      title: this.filters.title,
    };
    const sort = this.sort ? {
      column: this.sort.field,
      descending: this.sort.order == 1 ? false : true
    } : null;

    this.blogPostsService.getAll(filters, sort).subscribe(response => {
      this.pages = response.map(t => (new BlogPostModelVM().fill(t))) || [];
      this.totalRecords = response.length;
    });
  }

  ngOnInit() {
    this.resetFilters();
  }

  ngOnDestroy() {
  }

  isPublishedChange(row: BlogPostModelVM) {
    this.isLoading = true;
    this.blogPostsService.updateIsPublished(row.id, row.isPublished).subscribe(
      () => {
        this.isLoading = false;
        this.msg.add({ severity: 'success', summary: 'Статус публикации изменен' });
      }, () => {
        this.msg.add({ severity: 'error', summary: 'Ошибка изменения статуса публикации' });
        this.reload();
      }
    );
  }

  edit(row) {
    this.router.navigate([`/admin/main/blog-posts/${row.id}`]);
  }

  delete(row) {
    let msg = {
      title: 'Удалить запись?',
      text: 'Восстановление будет невозможно',
    };

    this.confirmService.confirm({
      ...Consts.Confirmation,
      header: msg.title || DefaultConfirmationTitle,
      message: msg.text || DefaultConfirmationText,
      accept: () => {
        this.blogPostsService.delete(row.id).subscribe(
          (response: any) => {
            this.reload();
            this.msg.add({ severity: 'success', summary: 'Успешно', detail: 'Запись удалена' });
          },
          error => {
            this.formService.showServerErrors(this.msg, error);
          });
      }
    });
  }

  public onSort(event, field) {
    this.sort = { field, order: event };
    this.reload();
  }

  public getSortOrder(field: string) {
    return this.sort && this.sort.field == field ? this.sort.order : undefined;
  }
}