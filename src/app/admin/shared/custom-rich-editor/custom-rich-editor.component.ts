import { Component, OnInit, ViewEncapsulation, Input, forwardRef } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ControlValueAccessor, FormGroup, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-rich-editor',
  templateUrl: './custom-rich-editor.component.html',
  styleUrls: ['./custom-rich-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => CustomRichEditorComponent),
  }],
})
export class CustomRichEditorComponent implements OnInit, ControlValueAccessor {
  content: string;

  onChange: any;
  onTouch: any;

  mode: 'visual' | 'raw' = 'visual';
  ckeditor = ClassicEditor;
  isDisabled: boolean;

  constructor(
  ) {
  }

  contentChanged() {
    this.onChange && this.onChange(this.content);
    this.onTouch && this.onTouch();
  }

  writeValue(obj: any): void {
    this.content = obj && obj.toString() || "";
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {
  }
}