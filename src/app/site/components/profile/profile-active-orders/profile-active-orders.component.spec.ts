import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileActiveOrdersComponent } from './profile-active-orders.component';

describe('ProfileActiveOrdersComponent', () => {
  let component: ProfileActiveOrdersComponent;
  let fixture: ComponentFixture<ProfileActiveOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileActiveOrdersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileActiveOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
