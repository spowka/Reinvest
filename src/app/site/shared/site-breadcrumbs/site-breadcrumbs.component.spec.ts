import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteBreadcrumbsComponent } from './site-breadcrumbs.component';

describe('SiteBreadcrumbsComponent', () => {
  let component: SiteBreadcrumbsComponent;
  let fixture: ComponentFixture<SiteBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
