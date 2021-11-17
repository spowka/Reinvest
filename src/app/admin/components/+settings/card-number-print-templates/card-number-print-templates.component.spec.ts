import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardNumberPrintTemplatesComponent } from "./card-number-print-templates.component";

describe("CardNumberPrintTemplatesComponent", () => {
  let component: CardNumberPrintTemplatesComponent;
  let fixture: ComponentFixture<CardNumberPrintTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardNumberPrintTemplatesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNumberPrintTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
