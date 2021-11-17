import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PPMOrderStatusHistoryComponent } from './ppm-order-status-history.component';

describe('PPMOrderStatusHistoryComponent', () => {
  let component: PPMOrderStatusHistoryComponent;
  let fixture: ComponentFixture<PPMOrderStatusHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PPMOrderStatusHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPMOrderStatusHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
