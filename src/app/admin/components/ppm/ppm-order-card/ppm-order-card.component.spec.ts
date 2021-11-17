import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPMOrderCardComponent } from './ppm-order-card.component';

describe('OrderComponent', () => {
  let component: PPMOrderCardComponent;
  let fixture: ComponentFixture<PPMOrderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PPMOrderCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPMOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
