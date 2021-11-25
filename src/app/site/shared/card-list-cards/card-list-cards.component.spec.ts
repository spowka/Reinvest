import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListCardsComponent } from './card-list-cards.component';

describe('CardListCardsComponent', () => {
  let component: CardListCardsComponent;
  let fixture: ComponentFixture<CardListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
