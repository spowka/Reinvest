import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalOrderComponent } from './terminal-order.component';

describe('TerminalOrderComponent', () => {
  let component: TerminalOrderComponent;
  let fixture: ComponentFixture<TerminalOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
