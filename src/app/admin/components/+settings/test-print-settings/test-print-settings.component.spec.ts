import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrintSettingsComponent } from './test-print-settings.component';

describe('TestPrintSettingsComponent', () => {
  let component: TestPrintSettingsComponent;
  let fixture: ComponentFixture<TestPrintSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestPrintSettingsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPrintSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
