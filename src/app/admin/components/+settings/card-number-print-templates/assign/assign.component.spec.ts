import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardNumberPrintTemplatesAssignComponent } from "./assign.component";

describe("CardNumberPrintTemplatesAssignComponent", () => {
  let component: CardNumberPrintTemplatesAssignComponent;
  let fixture: ComponentFixture<CardNumberPrintTemplatesAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardNumberPrintTemplatesAssignComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNumberPrintTemplatesAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
