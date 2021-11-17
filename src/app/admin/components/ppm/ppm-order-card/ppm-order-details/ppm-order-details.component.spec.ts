import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PPMOrderDetailsComponent } from './ppm-order-details.component';

describe('CustomerOrderDetailsComponent', () => {
  let component: PPMOrderDetailsComponent;
  let fixture: ComponentFixture<PPMOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PPMOrderDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPMOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
