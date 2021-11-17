import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickpointsMapComponent } from './pickpoints-map.component';

describe('PickpointsMapComponent', () => {
  let component: PickpointsMapComponent;
  let fixture: ComponentFixture<PickpointsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PickpointsMapComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickpointsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
