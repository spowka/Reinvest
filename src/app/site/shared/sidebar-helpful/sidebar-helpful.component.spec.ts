import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHelpfulComponent } from './sidebar-helpful.component';

describe('SidebarHelpfulComponent', () => {
  let component: SidebarHelpfulComponent;
  let fixture: ComponentFixture<SidebarHelpfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHelpfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHelpfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
