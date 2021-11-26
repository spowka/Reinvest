import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  data: any;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) {
    if (this.config) {
      this.data = this.config.data;
    }
  }

  ngOnInit() { }

  accept(id: any) {
    this.ref.close(id)
  }

  close() {
    this.ref.close(null)
  }
}
