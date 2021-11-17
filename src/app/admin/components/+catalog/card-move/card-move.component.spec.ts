import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMoveComponent } from './card-move.component';

describe('CardMoveComponent', () => {
  let component: CardMoveComponent;
  let fixture: ComponentFixture<CardMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
