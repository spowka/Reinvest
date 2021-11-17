import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCardStatusComponent } from './change-card-status.component';

describe('ChangeCardStatusComponent', () => {
  let component: ChangeCardStatusComponent;
  let fixture: ComponentFixture<ChangeCardStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeCardStatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCardStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
