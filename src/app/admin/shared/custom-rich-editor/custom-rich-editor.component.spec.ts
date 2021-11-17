import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRichEditorComponent } from './custom-rich-editor.component';

describe('CustomRichEditorComponent', () => {
  let component: CustomRichEditorComponent;
  let fixture: ComponentFixture<CustomRichEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomRichEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRichEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
