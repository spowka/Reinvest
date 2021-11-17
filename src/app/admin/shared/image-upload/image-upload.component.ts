import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ImageEditModel } from 'src/app/admin/shared/image/image-edit-model';

@Component({
  selector: 'rs-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageUploadComponent implements OnInit {
  @Input() public image: ImageEditModel;
  @Input() public title: string;
  @Input() public extensions: string = 'jpg, png, gif';
  @Input() public acceptType: string = 'image/*';
  @Input() public canEdit: boolean = true;

  percent: number;

  constructor(  ) {  }

  ngOnInit() {
  }
}