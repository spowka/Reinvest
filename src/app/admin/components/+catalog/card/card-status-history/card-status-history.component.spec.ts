import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatusHistoryComponent } from './card-status-history.component';

describe('CardStatusHistoryComponent', () => {
  let component: CardStatusHistoryComponent;
  let fixture: ComponentFixture<CardStatusHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardStatusHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStatusHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
