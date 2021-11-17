import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestOrderCardComponent } from './guest-order-card.component';

describe('OrderComponent', () => {
  let component: GuestOrderCardComponent;
  let fixture: ComponentFixture<GuestOrderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuestOrderCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
