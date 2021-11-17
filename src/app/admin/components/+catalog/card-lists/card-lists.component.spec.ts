import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListsComponent } from './card-lists.component';

describe('CardListsComponent', () => {
  let component: CardListsComponent;
  let fixture: ComponentFixture<CardListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
