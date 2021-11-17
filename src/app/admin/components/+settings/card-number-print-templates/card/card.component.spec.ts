import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardNumberPrintTemplateCardComponent } from "./card.component";

describe("CardNumberPrintTemplateCardComponent", () => {
  let component: CardNumberPrintTemplateCardComponent;
  let fixture: ComponentFixture<CardNumberPrintTemplateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardNumberPrintTemplateCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNumberPrintTemplateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
