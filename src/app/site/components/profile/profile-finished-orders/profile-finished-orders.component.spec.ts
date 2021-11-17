import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileFinishedOrdersComponent } from './profile-finished-orders.component';

describe('ProfileFinishedOrdersComponent', () => {
  let component: ProfileFinishedOrdersComponent;
  let fixture: ComponentFixture<ProfileFinishedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileFinishedOrdersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFinishedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
