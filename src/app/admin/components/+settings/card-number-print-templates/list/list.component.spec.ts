import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardNumberPrintTemplatesListComponent } from "./list.component";

describe("CardNumberPrintTemplatesListComponent", () => {
  let component: CardNumberPrintTemplatesListComponent;
  let fixture: ComponentFixture<CardNumberPrintTemplatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardNumberPrintTemplatesListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNumberPrintTemplatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
