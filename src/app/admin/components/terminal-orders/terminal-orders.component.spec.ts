import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalOrdersComponent } from './terminal-orders.component';

describe('TerminalOrdersComponent', () => {
  let component: TerminalOrdersComponent;
  let fixture: ComponentFixture<TerminalOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
