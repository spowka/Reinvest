import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileOrderStatusHistoryComponent } from './profile-order-status-history.component';

describe('ProfileOrderStatusHistoryComponent', () => {
  let component: ProfileOrderStatusHistoryComponent;
  let fixture: ComponentFixture<ProfileOrderStatusHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileOrderStatusHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOrderStatusHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
