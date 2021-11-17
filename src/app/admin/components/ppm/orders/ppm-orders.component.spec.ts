import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PPMOrdersComponent } from './ppm-orders.component';

describe('PPMOrdersComponent', () => {
  let component: PPMOrdersComponent;
  let fixture: ComponentFixture<PPMOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PPMOrdersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPMOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
