import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPreparationComponent } from './print-preparation.component';

describe('PrintPreparationComponent', () => {
  let component: PrintPreparationComponent;
  let fixture: ComponentFixture<PrintPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrintPreparationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
