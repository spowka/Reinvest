import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerOrderStatusHistoryComponent } from './customer-order-status-history.component';

describe('CustomerOrderStatusHistoryComponent', () => {
  let component: CustomerOrderStatusHistoryComponent;
  let fixture: ComponentFixture<CustomerOrderStatusHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerOrderStatusHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderStatusHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
