import { Component, OnInit } from '@angular/core';
import { Utils } from "../../../../../shared/Utils";
import { MessageService, DynamicDialogRef, DynamicDialogConfig, SelectItem } from "primeng/api";
import { CatalogService } from 'src/app/admin/shared/catalog/catalog.service';
import { catchError } from 'rxjs/internal/operators/catchError';
import { FormService } from 'src/app/admin/shared/form/form-service';
import { ImageEditModel } from 'src/app/admin/shared/image/image-edit-model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'create-subject',
  templateUrl: './change-card-status.component.html',
  styleUrls: ['./change-card-status.component.scss']
})

export class ChangeCardStatusComponent implements OnInit {
  public title: string;
  public message: string;
  public commentLabel: string;
  public comment: string;

  // public get comment() {
  //   return '456';
  // }

  constructor(
    private catalogService: CatalogService,
    private msg: MessageService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) {
    if (config.data) {
      this.title = config.data.title;
      this.message = config.data.message;
      this.commentLabel = config.data.commentLabel;
    }
    this.comment = '';
  }

  ngOnInit() {
  }

  public closeModal() {
    this.ref.close();
  }

  public get isValid() {
    return this.comment;
  }

  public save() {
    if (this.isValid) {
      var data = {
        comment: this.comment
      };
      this.ref.close(data);
    }
  }
}