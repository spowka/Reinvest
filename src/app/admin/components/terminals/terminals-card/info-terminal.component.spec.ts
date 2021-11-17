import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTerminalComponent } from './info-terminal.component';

describe('InfoTerminalComponent', () => {
  let component: InfoTerminalComponent;
  let fixture: ComponentFixture<InfoTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTerminalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
