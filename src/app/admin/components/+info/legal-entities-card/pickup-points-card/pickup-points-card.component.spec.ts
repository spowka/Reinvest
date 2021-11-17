import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupPointsCardComponent } from './pickup-points-card.component';

describe('PickupPointsCardComponent', () => {
  let component: PickupPointsCardComponent;
  let fixture: ComponentFixture<PickupPointsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PickupPointsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupPointsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
