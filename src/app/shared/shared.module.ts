import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerComponent } from "./dynamic-modal/modal-container/modal-container.component";
import { InsertionDirective } from "./dynamic-modal/insertion.directive";
import { DynamicModalService } from "./dynamic-modal/dynamic-modal-service/modal-service.service";
import { CustomRichEditorComponent } from '../admin/shared/custom-rich-editor/custom-rich-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ModalContainerComponent,
    InsertionDirective,
    CustomRichEditorComponent,
  ],
  entryComponents: [
    ModalContainerComponent
  ],
  exports: [
    ModalContainerComponent,
    CustomRichEditorComponent,
  ],
  providers: [
    DynamicModalService,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomRichEditorComponent),
    }
  ]
})
export class SharedModule { }
