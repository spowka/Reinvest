import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeMapComponent } from './office-map.component';

describe('OfficeMapComponent', () => {
  let component: OfficeMapComponent;
  let fixture: ComponentFixture<OfficeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfficeMapComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
