import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPageCardComponent } from './text-page-card.component';

describe('TextPageCardComponent', () => {
  let component: TextPageCardComponent;
  let fixture: ComponentFixture<TextPageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextPageCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
