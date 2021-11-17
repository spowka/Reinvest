import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachTerminalComponent } from './attach-terminal.component';

describe('AttachTerminalComponent', () => {
  let component: AttachTerminalComponent;
  let fixture: ComponentFixture<AttachTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
